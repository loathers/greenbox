import {
  Alert,
  Box,
  Code,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { type RawSnapshotData } from "greenbox-data";
import { useCallback } from "react";

import { useAppDispatch } from "../hooks.js";
import { fetchAll } from "../store/index.js";

import MetaInfo from "./MetaInfo.js";
import Spinner from "./Spinner.js";
import SwitchButton from "./SwitchButton.js";

type Props = {
  meta?: RawSnapshotData["meta"];
  direct?: boolean;
  loading?: boolean;
  error?: boolean;
  errorMessage?: string;
};

export default function Header({
  meta,
  direct,
  loading,
  error,
  errorMessage,
}: Props) {
  const dispatch = useAppDispatch();

  const forceUpdate = useCallback(() => {
    dispatch(fetchAll(true));
  }, [dispatch]);

  return (
    <Stack as="section" alignItems="stretch" py={2} gap={5}>
      <HStack alignItems="center" flex={1} maxWidth="100%" wrap="wrap">
        <Heading as="h1">Greenbox</Heading>
        <Box>
          <SwitchButton />
        </Box>
        <Box flex={1} />
        <Box textAlign="right">
          {meta ? (
            <MetaInfo direct={direct} meta={meta} />
          ) : loading ? (
            <Spinner />
          ) : error ? (
            <Alert.Root p={1} status="error" fontSize="md">
              <Alert.Indicator />
              <Alert.Description>{errorMessage}</Alert.Description>
            </Alert.Root>
          ) : null}
        </Box>
      </HStack>
      <Stack gap={3}>
        <Text>
          To get the data from your account, first install the script by running
        </Text>
        <Code p={2} borderRadius={5}>
          git checkout loathers/greenbox release
        </Code>
        <Text>
          in KoLmafia's Graphical CLI. Once that's done, you can update the data
          at this link whenever you like by running <Code>greenbox</Code>.
        </Text>
      </Stack>
    </Stack>
  );
}
