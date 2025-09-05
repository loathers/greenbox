import { Link } from "@chakra-ui/react";

type Props = {
  page: string;
  text: string;
  fontSize: string;
};

export default function WikiSearchLink({ page, text, fontSize }: Props) {
  return (
    <Link
      fontSize={fontSize}
      href={`https://wiki.kingdomofloathing.com/Special:Search?search=${page}`}
    >
      {text}
    </Link>
  );
}
