import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    config: {
        initialColorMode: "system",
        useSystemColorMode: true,
    },
    semanticTokens: {
        colors: {
            "chakra-body-bg": {
                _light: "#f6f8fa",
                _dark: "#010409",
            },
            accent: {
                default: "#ffffff",
                _dark: "#161b22",
            },
            complete: {
                default: "#afa",
                _dark: "green.800",
            },
            partial: {
                default: "#eea",
                _dark: "yellow.800",
            }
        }
    },
});