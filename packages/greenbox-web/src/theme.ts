import { extendTheme, useColorModeValue } from "@chakra-ui/react";

export function useColorModeFilter() {
  return useColorModeValue("", "contrast(0.6666) invert(1) hue-rotate(180deg)");
}

export const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
    disableTransitionOnChange: false,
  },
  semanticTokens: {
    colors: {
      "chakra-body-bg": {
        _light: "#f6f8fa",
        _dark: "#2a292a",
      },
      accent: {
        _light: "#ffffff",
        _dark: "#46454a",
      },
      // This is the colour that KoL images backgrounds are when considering useColorModeFilter
      imagebg: {
        _light: "#ffffff",
        _dark: "#2a292a",
      },
      complete: {
        _light: "#afa",
        _dark: "green.800",
      },
      partial: {
        _light: "#eea",
        _dark: "yellow.800",
      },
    },
  },
});
