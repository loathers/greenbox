import {
  createSystem,
  defaultConfig,
  defineSemanticTokens,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function useColorModeFilter() {
  const { theme } = useTheme();
  return theme === "dark"
    ? "contrast(0.6666) invert(1) hue-rotate(180deg)"
    : "";
}

/**
 * Filter to turn a black and white image to black and "complete":
 * `invert(100%) invert(92%) sepia(9%) saturate(1691%) hue-rotate(58deg) brightness(103%) contrast(101%)`
 * Filter to turn a black and white image to black and "partial":
 * `invert (100%) invert(95%) sepia(47%) saturate(465%) hue-rotate(351deg) brightness(104%) contrast(87%)`
 */

const semanticTokens = defineSemanticTokens({
  colors: {
    "chakra-body-bg": {
      value: {
        base: "#f6f8fa",
        _dark: "#2a292a",
      },
    },
    accent: {
      value: {
        base: "#f6f8fa",
        _dark: "#46454a",
      },
    },
    // This is the colour that KoL images backgrounds are when considering useColorModeFilter
    imagebg: {
      value: {
        base: "#ffffff",
        _dark: "#2a292a",
      },
    },
    complete: {
      value: {
        base: "#afa",
        _dark: "#22543d",
      },
    },
    partial: {
      value: {
        base: "#eea",
        _dark: "#774210",
      },
    },
  },
});

export const theme = createSystem(defaultConfig, {
  theme: {
    semanticTokens,
  },
  globalCss: {
    html: {
      marginLeft: "calc(100vw - 100%)",
    },
  },
});
