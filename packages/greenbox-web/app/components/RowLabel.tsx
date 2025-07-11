import { Flex, Badge } from "@chakra-ui/react";

export default function RowLabel({
  label,
  complete,
}: {
  label: React.ReactNode;
  complete: boolean;
}) {
  return (
    <Flex
      gridColumn={["1 / span 3", null, 1]}
      key={`rowlabel-${label}`}
      alignItems="center"
      justifyContent={[null, null, "flex-end"]}
    >
      <Badge
        transform={[null, null, "rotate(270deg)"]}
        fontSize="sm"
        bg={complete ? "complete" : undefined}
      >
        {label}
      </Badge>
    </Flex>
  );
}
