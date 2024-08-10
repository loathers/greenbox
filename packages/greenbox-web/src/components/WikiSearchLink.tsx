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
      href={`https://kol.coldfront.net/thekolwiki/index.php?search=${page}&title=Special%3ASearch`}
      isExternal={true}
    >
      {text}
    </Link>
  );
}
