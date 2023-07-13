import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useCallback } from "react";

import Image from "./Image";

export default function SwitchButton() {
  const { toggleColorMode } = useColorMode();
  const next = useColorModeValue("dark", "light");
  const colorIcon = useColorModeValue("moon", "sun");
  const label = `Switch to ${next} mode`;
  const toggle = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      toggleColorMode();
    },
    [toggleColorMode],
  );

  return (
    <IconButton
      size="xs"
      onClick={toggle}
      aria-label={label}
      title={label}
      icon={<Image height="60%" src={`/${colorIcon}.png`} />}
    />
  );
}
