import { Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

import { useWikiLink } from "../contexts/WikiLinkProvider.js";
import type { SkillType } from "../store/index.js";
import { useColorModeFilter } from "../theme.js";

import Spinner from "./Spinner.js";

type Props = {
  skill: SkillType;
};

export default function SkillDescription({ skill }: Props) {
  const wikiLink = useWikiLink("SKILL", skill.name); // @todo use context
  const [contents, setContents] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `https://corsproxy.io/?https://kol.coldfront.net/thekolwiki/api.php?action=parse&page=${wikiLink}&prop=text&format=json`,
      );
      const result = await response.json();
      const match = /<table width="100%"><tr><td>(.*?)<\/td>/s.exec(
        result.parse.text["*"],
      );
      if (match == null) {
        setContents("Cannot load wiki page (this is an experimental feature!)");
      } else {
        setContents(
          match[0]
            .replaceAll('href="/', 'href="https://kol.coldfront.net/')
            .replaceAll(
              'p style="color:',
              'p class="colortext" style="color:',
            ) + "</tr></table>",
        );
      }
    }

    load();
  }, [wikiLink]);

  useEffect(() => {
    if (ref.current && contents) {
      ref.current.innerHTML = contents;
    }
  }, [ref, contents]);

  const filter = useColorModeFilter();

  return (
    <Flex
      css={{ img: { filter }, "p.colortext": { filter } }}
      ref={ref}
      justifyContent="center"
    >
      <Spinner />
    </Flex>
  );
}
