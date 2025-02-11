import { Image as ChakraImage } from "@chakra-ui/react";

import { useColorModeFilter } from "../theme.js";

export default function Image(props: React.ComponentProps<typeof ChakraImage>) {
  const filter = useColorModeFilter();

  return <ChakraImage {...props} filter={filter} />;
}
