import { Image as ChakraImage, ImageProps, useColorModeValue } from "@chakra-ui/react";

export default function Image(props: ImageProps) {
  const filter = useColorModeValue("", "contrast(0.6666) invert(1) hue-rotate(180deg)");

  return <ChakraImage {...props} filter={filter} />;
}
