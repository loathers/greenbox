import { Image, Portal, Tooltip } from "@chakra-ui/react";

type Props = {
  current: number;
  data: number;
};

export default function VersionWarning({ current, data }: Props) {
  if (data >= current) return null;
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <Image p={2} height="60%" src={`/warning.png`} />
      </Tooltip.Trigger>
      <Portal>
        <Tooltip.Positioner>
          <Tooltip.Content>
            <Tooltip.Arrow />
            This snapshot was made with an older version of greenbox v{data} and
            some data may be rendered incorrectly.
          </Tooltip.Content>
        </Tooltip.Positioner>
      </Portal>
    </Tooltip.Root>
  );
}
