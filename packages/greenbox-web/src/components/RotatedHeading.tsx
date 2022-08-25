import { BackgroundProps, Badge, Box, Flex } from "@chakra-ui/react";
import { TypographyProps } from "@chakra-ui/system";

type Props = {
  children: React.ReactNode;
  bg?: BackgroundProps["bg"];
  size?: TypographyProps["fontSize"];
};

export default function RotatedHeading({ children, bg, size = "sm" }: Props) {
  return (
    <Box position="relative" width="20px" height="100%">
      <Badge
        position="absolute"
        top="50%"
        left={0}
        sx={{ transform: "rotate(270deg) translateY(-50%)" }}
        fontSize={size}
        bg={bg}
      >
        {children}
      </Badge>
    </Box>
  );
}
