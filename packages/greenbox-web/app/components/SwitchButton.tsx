import { IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useCallback } from "react";

import Image from "./Image.js";

export default function SwitchButton() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  const colorIcon = theme === "dark" ? "sun" : "moon";
  const label = `Switch to ${next} mode`;
  const toggle = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      setTheme(next);
    },
    [setTheme, next],
  );

  return (
    <IconButton size="xs" onClick={toggle} aria-label={label} title={label} variant="subtle">
      <Image height="60%" src={`/${colorIcon}.png`} />
    </IconButton>
  );
}
