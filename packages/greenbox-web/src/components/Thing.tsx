import { Box, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { forwardRef } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

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

function styleFromStatus(state: StateType) {
  switch (state) {
    case "complete": {
      return { backgroundColor: "complete" };
    }
    case "partial": {
      return {
        backgroundColor: "partial",
        backgroundImage:
          "repeating-linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white), repeating-linear-gradient(45deg, white 25%, transparent 25%, transparent 75%, white 75%, white)",
        backgroundPosition: "0 0, 5px 5px",
        backgroundSize: "10px 10px",
      };
    }
    default: {
      return {};
    }
  }
}

const otherClashes = ["Some Assembly Required", "Batter Up!"];

export function guessWikiLink(
  link: string | undefined,
  name: string,
  type: Props["type"],
  clashes: string[]
) {
  if (link) return link;
  const n = name.replaceAll(" ", "_");
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
  ref
) {
  const style = styleFromStatus(status);
  const clashes = useSelector((state: RootState) => state.wikiClashes);

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
        backgroundColor: style.backgroundColor || "#efefef",
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
        {name}
      </LinkOverlay>
    </LinkBox>
  );
});
