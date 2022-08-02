import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { PlayerData } from "./MainPage";

type Props = {
  value: PlayerData | null;
  onChange: (data: PlayerData | null) => any;
};

export default function DataInput({ value, onChange }: Props) {
  const [rawValue, setRawValue] = useState(value == null ? "" : JSON.stringify(value));
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setRawValue((v) => ((v === "" && value !== null) ? JSON.stringify(value) : v));
  }, [value]);

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
        <AccordionButton fontSize="4xl">
          <Box flex="1" textAlign="left">
            Greenbox
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <Textarea isInvalid={invalid} value={rawValue} onChange={handleChange} />
      </AccordionPanel>
    </AccordionItem>
  );
}
