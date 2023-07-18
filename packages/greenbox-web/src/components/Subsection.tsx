import { HStack, Heading, Stack } from "@chakra-ui/react";

import AlphaImage from "./AlphaImage";

type Props = React.PropsWithChildren<{
  title: string;
  image: string;
  right?: React.ReactNode;
}>;

export default function Subsection({ image, title, right = null, children }: Props) {
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
        {right}
      </HStack>
      {children}
    </Stack>
  );
}
