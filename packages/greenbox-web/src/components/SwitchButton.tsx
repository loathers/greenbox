import { Button, IconButton, Image, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function SwitchButton() {
  const { toggleColorMode } = useColorMode();
  const next = useColorModeValue("dark", "light");
  const colorIcon = useColorModeValue("moon", "star");
  const label = `Switch to ${next} mode`;

  return (
    <IconButton
      size="xs"
      onClick={toggleColorMode}
      aria-label={label}
      title={label}
      icon={<Image height="60%" src={`/${colorIcon}.png`} />}
    />
  );
}
