import { Image, Tooltip } from "@chakra-ui/react";

type Props = {
  current: number;
  data: number;
};

export default function VersionWarning({ current, data }: Props) {
  if (data >= current) return null;
  return (
    <Tooltip
      p={2}
      label={`This snapshot was made with an older version of greenbox (v${data}) and some data may be rendered incorrectly.`}
    >
      <Image height="60%" src={`/warning.png`} />
    </Tooltip>
  );
}
