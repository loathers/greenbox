import { Box, Heading, Stack } from "@chakra-ui/react";
import { ClassDef } from "greenbox-data";

import AlphaImage from "./AlphaImage";

export default function SkillClassHeading({ bucket, cls }: { bucket: number; cls: ClassDef }) {
  const name = bucket === 0 ? "Other" : cls ? cls.name : "Unknown";
  const image = cls ? cls.image : "book";

  return (
    <Heading as="h3" fontSize="2xl" fontWeight="normal">
      <Stack direction="row">
        <AlphaImage src={`itemimages/${image}.gif`} />
        <Box>{name}</Box>
      </Stack>
    </Heading>
  );
}
