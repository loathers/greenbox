import { Image as ChakraImage, ImageProps, useColorModeValue } from "@chakra-ui/react";

export function useColorModeFilter() {
  return useColorModeValue("", "contrast(0.6666) invert(1) hue-rotate(180deg)");
}

export default function Image(props: ImageProps) {
  const filter = useColorModeFilter();

  return <ChakraImage {...props} filter={filter} />;
}
