import { Flex, Badge } from "@chakra-ui/react";

export default function Year({ year, complete }: { year: number; complete: boolean }) {
  return (
    <Flex
      gridColumn={["1 / span 3", null, 1]}
      key={`year-${year}`}
      alignItems="center"
      justifyContent={[null, null, "flex-end"]}
    >
      <Badge
        transform={[null, null, "rotate(270deg)"]}
        fontSize="sm"
        bg={complete ? "complete" : undefined}
      >
        {year}
      </Badge>
    </Flex>
  );
}
