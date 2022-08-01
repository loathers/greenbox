import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useCallback, useState } from "react";

import { PlayerData } from "./MainPage";

type Props = {
  value: PlayerData | null;
  onChange: (data: PlayerData | null) => any;
};

export default function DataInput({ value, onChange }: Props) {
  const [rawValue, setRawValue] = useState(
    value == null ? "" : JSON.stringify(value)
  );
  const [invalid, setInvalid] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.currentTarget.value;

      setRawValue(value);

      try {
        onChange(JSON.parse(value));
        setInvalid(false);
      } catch (e) {
        if (!(e instanceof SyntaxError)) throw e;
        setInvalid(true);
      }
    },
    [onChange]
  );

  return (
    <AccordionItem>
      <Heading>
        <AccordionButton fontSize="3xl">
          <Box flex="1" textAlign="left">
            Player Data
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <Textarea
          isInvalid={invalid}
          value={rawValue}
          onChange={handleChange}
        />
      </AccordionPanel>
    </AccordionItem>
  );
}
