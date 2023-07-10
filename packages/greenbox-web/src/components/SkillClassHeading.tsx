import { Box, Heading, Stack } from "@chakra-ui/react";
import { ClassDef } from "greenbox-data";

import AlphaImage from "./AlphaImage";
import Medal from "./Medal";

type Props = { bucket: number; cls: ClassDef; medal: boolean };

export default function SkillClassHeading({ bucket, cls, medal }: Props) {
  const name = bucket === 0 ? "Other" : cls ? cls.name : "Unknown";
  const image = cls ? cls.image : "book";

  return (
    <Heading as="h3" fontSize="2xl" fontWeight="normal">
      <Stack direction="row">
        <AlphaImage src={`itemimages/${image}.gif`} />
        <Box>{name}</Box>
        <Box flex={1} />
        {medal && cls && <Medal title="100% marked hardcore permanent" />}
      </Stack>
    </Heading>
  );
}
