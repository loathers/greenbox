import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useTheme } from "next-themes";

import Image from "./Image.js";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export default function Spinner() {
  const { theme } = useTheme();
  const invert = theme === "dark" ? "100" : "0";
  return (
    <Box width={37.5} height={37.5} p={1}>
      <Image
        src="/loading.png"
        alt="Loading"
        filter={`invert(${invert})`}
        css={{ animation: `${spin} 1.5s infinite linear`, opacity: "0.3" }}
      />
    </Box>
  );
}
