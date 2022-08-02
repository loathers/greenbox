import { Image as ChakraImage } from "@chakra-ui/react";

type Props = {
  name: string;
};

export default function Image({ name }: Props) {
  return <ChakraImage src={`http://images.kingdomofloathing.com/${name}`} />;
}
