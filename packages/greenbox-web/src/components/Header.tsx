import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Code,
  Heading,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { RawSnapshotData } from "greenbox-data";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { fetchAll, store } from "../store";

import MetaInfo from "./MetaInfo";

type Props = {
  meta?: RawSnapshotData['meta'];
};

const forceRefreshInfo = `
This reloads the general information Greenbox needs to know about the Kingdom of Loathing.
Press it if some new content is not appearing at all.
It will not collect any new information about you specifically - you still need to run the command in KoLmafia!
`;

export default function Header({ meta }: Props) {
  const dispatch = useDispatch<typeof store.dispatch>();

  const forceUpdate = useCallback(() => {
    dispatch(fetchAll(true));
  }, [dispatch]);

  return (
    <AccordionItem>
      <Heading as="h1">
        <AccordionButton fontSize="4xl">
          <Box flex="1" textAlign="left">
            Greenbox
          </Box>
          <Box flex="1">{meta && <MetaInfo meta={meta} />}</Box>
          <AccordionIcon />
        </AccordionButton>
      </Heading>
      <AccordionPanel>
        <Stack>
          <Text>To get the data from your account, first install the script by running</Text>
          <Code p={2} borderRadius={5}>
            git checkout loathers/greenbox release
          </Code>
          <Text>
            in KoLmafia's Graphical CLI. Once that's done, you can get an up-to-date link whenever
            you like by running <Code>greenbox</Code>.
          </Text>
          <Stack direction="row-reverse" pt={3}>
            <Tooltip p={2} label={forceRefreshInfo}>
              <Button size="xs" colorScheme="red" onClick={forceUpdate}>
                Force update game data <QuestionOutlineIcon ml={1} />
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
