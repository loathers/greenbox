import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Code,
  Heading,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { RawSnapshotData, expand } from "greenbox-data";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

type Props = {
  value: RawSnapshotData | null;
  onChange: (data: RawSnapshotData | null) => any;
};

export default function DataInput({ value, onChange }: Props) {
  const [rawValue, setRawValue] = useState(value == null ? "" : JSON.stringify(value));
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    setRawValue((v) => (v === "" && value !== null ? JSON.stringify(value) : v));
  }, [value]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.currentTarget.value;

      setRawValue(value);

      try {
        onChange(expand(value));
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
        <Stack>
          <Text>To get the data from your account, first install the script by running</Text>
          <Code p={2} borderRadius={5}>
            git checkout https://github.com/Loathing-Associates-Scripting-Society/greenbox release
          </Code>
          <Text>
            You can now get your data whenever you like by running <Code>greenbox</Code>
          </Text>
          <Textarea
            isInvalid={invalid}
            value={rawValue}
            onChange={handleChange}
            placeholder="Paste your script output here!"
          />
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
