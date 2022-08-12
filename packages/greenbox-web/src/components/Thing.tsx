import { Box, Flex, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import AlphaImage from "./AlphaImage";

type StateType = "complete" | "partial" | null | undefined;

type Props = {
  type: "skill" | "familiar" | "trophy" | "tattoo" | "item";
  state?: StateType;
  name: string;
  image: string;
  title?: string;
  sourceWidth?: number;
  badges?: React.ReactNode;
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

function guessWikiLink(name: string, type: Props["type"], clashes: string[]) {
  const n = name.replaceAll(" ", "_");

  if (clashes.includes(name)) return `${n}_(${type})`;
  return n;
}

export default function Thing({
  type,
  state: status,
  name,
  image,
  badges = null,
  sourceWidth = 30,
  title = `${name} (${status || "do not have"})`,
}: Props) {
  const style = styleFromStatus(status);
  const clashes = useSelector((state: RootState) => state.wikiClashes);

  const wikiLink = guessWikiLink(name, type, clashes);

  return (
    <LinkBox
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
    >
      <Box position="absolute" sx={{ top: 0, right: 0 }}>
        {badges}
      </Box>
      <AlphaImage src={image} sourceWidth={sourceWidth} />
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
}
