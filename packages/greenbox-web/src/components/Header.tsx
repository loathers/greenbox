import { QuestionOutlineIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Code,
  HStack,
  Heading,
  Stack,
  Text,
  Tooltip,
  Link,
} from "@chakra-ui/react";
import { RawSnapshotData } from "greenbox-data";
import { useCallback } from "react";

import { useAppDispatch } from "../hooks";
import { fetchAll } from "../store";

import MetaInfo from "./MetaInfo";
import Spinner from "./Spinner";
import SwitchButton from "./SwitchButton";

type Props = {
  meta?: RawSnapshotData["meta"];
  direct?: boolean;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
  snapshots: {
    current: number | null;
    total: number | null;
  };
};

const forceRefreshInfo = `
This reloads the general information Greenbox needs to know about the Kingdom of Loathing.
Press it if some new content is not appearing at all.
It will not collect any new information about you specifically - you still need to run the command in KoLmafia!
`;

export default function Header({
  meta,
  direct,
  loading,
  error,
  errorMessage,
  snapshots,
}: Props) {
  const dispatch = useAppDispatch();

  const forceUpdate = useCallback(() => {
    dispatch(fetchAll(true));
  }, [dispatch]);

  const prevSnapshotLink = snapshots.current && snapshots.current !== 1 && `/?u=${meta?.id}&h=${snapshots.current - 1}`
  const nextSnapshotLink = snapshots.current && snapshots.total && snapshots.current !== snapshots.total && `/?u=${meta?.id}&h=${snapshots.current + 1}`

  return (
    <Stack as="section" alignItems="stretch" py={2}>
      <HStack alignItems="center" flex={1} maxWidth="100%" wrap="wrap">
        <Heading as="h1">Greenbox</Heading>
        <Box>
          <SwitchButton />
        </Box>
        <Box flex={1} />
        <Box textAlign="right">
          {meta ? (
            <MetaInfo direct={direct} meta={meta} snapshots={snapshots} />
          ) : loading ? (
            <Spinner />
          ) : error ? (
            <Alert status="error" fontSize="md">
              <AlertIcon />
              {errorMessage}
            </Alert>
          ) : null}
        </Box>
      </HStack>
      <Stack>
        <HStack>
          <Text>
            To get the data from your account, first install the script by running
          </Text>
          <Box flex={1} />
          <Stack>
            {prevSnapshotLink && <Link href={prevSnapshotLink}>Previous snapshot</Link>}
            {nextSnapshotLink && <Link href={nextSnapshotLink}>Next snapshot</Link>}
          </Stack>
        </HStack>
        <Code p={2} borderRadius={5}>
          git checkout loathers/greenbox release
        </Code>
        <Text>
          in KoLmafia's Graphical CLI. Once that's done, you can update the data
          at this link whenever you like by running <Code>greenbox</Code>.
        </Text>
        <Stack direction="row-reverse" pt={3}>
          <Tooltip p={2} label={forceRefreshInfo}>
            <Button size="xs" colorScheme="red" onClick={forceUpdate}>
              Force update game data <QuestionOutlineIcon ml={1} />
            </Button>
          </Tooltip>
        </Stack>
      </Stack>
    </Stack>
  );
}
