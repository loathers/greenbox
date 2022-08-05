import { Box, Image, keyframes } from "@chakra-ui/react";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export default function Spinner() {
  return (
    <Box width={37.5} height={37.5} p={1}>
      <Image
        src="/loading.png"
        alt="Loading"
        sx={{ animation: `${spin} 1.5s infinite linear`, opacity: "0.3" }}
      />
    </Box>
  );
}
