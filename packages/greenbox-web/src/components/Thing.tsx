import { Box, Flex, Text } from "@chakra-ui/react";

import AlphaImage from "./AlphaImage";

type StateType = "complete" | "partial" | null | undefined;

type Props = {
  state?: StateType;
  name: string;
  image: string;
  title?: string;
  sourceWidth?: number;
  badges?: React.ReactNode;
};

function styleFromState(state: StateType) {
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

export default function Thing({
  state,
  name,
  image,
  badges = null,
  sourceWidth = 30,
  title = `${name} (${state || "none"})`,
}: Props) {
  const style = styleFromState(state);

  return (
    <Flex
      as="a"
      href={`https://kol.coldfront.net/thekolwiki/index.php/${name}`}
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
