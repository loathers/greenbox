import { Box, Heading, HStack } from "@chakra-ui/react";
import { ClassDef } from "greenbox-data";

import { getSkillHeader } from "../utils";

import AlphaImage from "./AlphaImage";
import Medal from "./Medal";

type Props = { bucket: number; cls: ClassDef; medal: boolean };

export default function SkillClassHeading({ bucket, cls, medal }: Props) {
  const [name, image] = getSkillHeader(bucket, cls);

  return (
    <HStack direction="row">
      <AlphaImage src={`itemimages/${image}.gif`} />
      <Heading as="h3" fontSize="2xl" fontWeight="normal">
        {name}
      </Heading>
      <Box flex={1} />
      {medal && cls && <Medal title="100% marked hardcore permanent" />}
    </HStack>
  );
}
