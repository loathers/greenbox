import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";

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
