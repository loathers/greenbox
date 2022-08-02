import { Image, keyframes } from "@chakra-ui/react";

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
    <Image src="/loading.png" alt="Loading" sx={{ animation: `${spin} 1.5s infinite linear` }} />
  );
}
