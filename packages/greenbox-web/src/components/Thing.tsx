import { Box, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import AlphaImage from "./AlphaImage";

type StateType = "complete" | "partial" | null | undefined;

type Props = {
  type: "skill" | "familiar" | "trophy" | "tattoo";
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
  title = `${name} (${status || "none"})`,
}: Props) {
  const style = styleFromStatus(status);
  const clashes = useSelector((state: RootState) => state.wikiClashes);

  const wikiLink = guessWikiLink(name, type, clashes);

  return (
    <Flex
      as="a"
      href={`https://kol.coldfront.net/thekolwiki/index.php/${wikiLink}`}
      direction="column"
      alignItems="center"
      justifyContent="center"
      border="1px solid black"
      p={1}
      {...style}
      title={title}
      position="relative"
      overflow="hidden"
    >
      <Box position="absolute" sx={{ top: 0, right: 0 }}>
        {badges}
      </Box>
      <AlphaImage src={image} sourceWidth={sourceWidth} />
      <Text textAlign="center" fontSize="10px">
        {name}
      </Text>
    </Flex>
  );
}
