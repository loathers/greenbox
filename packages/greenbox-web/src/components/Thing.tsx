import { Box, LinkBox, LinkOverlay, useToken } from "@chakra-ui/react";
import he from "he";
import { forwardRef } from "react";

import { useAppSelector } from "../hooks";

import AlphaImage from "./AlphaImage";

type StateType = "complete" | "partial" | null | undefined;

type Props = {
  type: "skill" | "familiar" | "trophy" | "tattoo" | "item";
  state?: StateType;
  name: string;
  image: string | React.ReactNode;
  title?: string;
  sourceWidth?: number;
  badges?: React.ReactNode;
  link?: string;
};

function styleFromStatus(state: StateType, bg: string) {
  switch (state) {
    case "complete": {
      return { backgroundColor: "complete" };
    }
    case "partial": {
      return {
        backgroundColor: "partial",
        backgroundImage: `repeating-linear-gradient(45deg, ${bg} 25%, transparent 25%, transparent 75%, ${bg} 75%, ${bg}), repeating-linear-gradient(45deg, ${bg} 25%, transparent 25%, transparent 75%, ${bg} 75%, ${bg})`,
        backgroundPosition: "0 0, 5px 5px",
        backgroundSize: "10px 10px",
      };
    }
    default: {
      return {
        backgroundColor: bg,
      };
    }
  }
}

const otherClashes = ["Some Assembly Required", "Batter Up!"];

export function guessWikiLink(
  link: string | undefined,
  name: string,
  type: Props["type"],
  clashes: string[],
) {
  if (link) return he.decode(link);
  const n = he.decode(name).replaceAll(" ", "_");
  if (clashes.includes(name) || otherClashes.includes(name)) return `${n}_(${type})`;
  return n;
}

export default forwardRef<HTMLDivElement, Props>(function Thing(
  {
    type,
    state: status,
    name,
    image,
    badges = null,
    sourceWidth = 30,
    title = `${name} (${status || "do not have"})`,
    link,
    ...rest
  },
  ref,
) {
  const [bg] = useToken("colors", ["accent"]);
  const style = styleFromStatus(status, bg);
  const clashes = useAppSelector((state) => state.wikiClashes);

  const wikiLink = guessWikiLink(link, name, type, clashes);

  return (
    <LinkBox
      ref={ref}
      borderWidth={1}
      borderStyle="solid"
      borderColor="black"
      p={1}
      {...style}
      title={title}
      position="relative"
      overflow="hidden"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      _hover={{
        filter: style.backgroundColor ? "brightness(90%)" : undefined,
        backgroundColor: style.backgroundColor || "blackAlpha.50",
      }}
      {...rest}
    >
      {badges && (
        <Box position="absolute" sx={{ top: 0, right: 0 }}>
          {badges}
        </Box>
      )}
      {typeof image === "string" ? <AlphaImage src={image} sourceWidth={sourceWidth} /> : image}
      <LinkOverlay
        textAlign="center"
        fontSize="10px"
        href={`https://kol.coldfront.net/thekolwiki/index.php/${wikiLink}`}
        isExternal
      >
        {he.decode(name)}
      </LinkOverlay>
    </LinkBox>
  );
});
