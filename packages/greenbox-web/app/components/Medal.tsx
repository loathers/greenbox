import { Image } from "@chakra-ui/react";

type Props = {
  title?: string;
};

export default function Medal({ title }: Props) {
  return <Image src="/medal.png" title={title} height="20px" mt={1} mr={1} />;
}
