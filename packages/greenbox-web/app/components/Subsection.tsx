import { Box, HStack, Heading, Stack } from "@chakra-ui/react";

import AlphaImage from "./AlphaImage.js";

type Props = React.PropsWithChildren<{
  title: string;
  image: string;
  farRight?: boolean;
  right?: React.ReactNode;
}>;

export default function Subsection({
  image,
  title,
  farRight = false,
  right = null,
  children,
}: Props) {
  return (
    <Stack spacing={4}>
      <HStack>
        <AlphaImage
          src={image}
          sourceWidth={image.includes("sigils/") ? 50 : 30}
          width={30}
          height={30}
        />
        <Heading as="h3" fontWeight="normal" fontSize="2xl">
          {title}
        </Heading>
        {farRight && <Box flex={1} />}
        {right}
      </HStack>
      {children}
    </Stack>
  );
}
