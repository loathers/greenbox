import { Flex } from "@chakra-ui/react";
import { SkillDef } from "greenbox-data";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import Spinner from "./Spinner";
import { guessWikiLink } from "./Thing";

type Props = {
  skill: SkillDef;
};

export default function SkillDescription({ skill }: Props) {
  const clashes = useSelector((state: RootState) => state.wikiClashes);
  const wikiLink = useMemo(
    () => guessWikiLink(undefined, skill.name, "skill", clashes),
    [skill, clashes]
  );
  const [contents, setContents] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      const url = `https://kol.coldfront.net/thekolwiki/index.php/${wikiLink}`;
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
      const result = await response.json();
      const match = /<table width="100%"><tr><td>(.*?)<\/td>/s.exec(result.contents);
      if (match == null) {
        setContents("Cannot load wiki page (this is an experimental feature!)");
      } else {
        setContents(match[0] + "</tr></table>");
      }
    }

    load();
  }, [wikiLink]);

  useEffect(() => {
    if (ref.current && contents) {
      ref.current.innerHTML = contents;
    }
  }, [ref, contents]);

  return (
    <Flex ref={ref} justifyContent="center">
      <Spinner />
    </Flex>
  );
}
