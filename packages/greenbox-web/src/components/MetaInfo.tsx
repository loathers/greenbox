import { HStack, Text } from "@chakra-ui/react";
import { formatDistance, intlFormat } from "date-fns";
import { RawSnapshotData, VERSION } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import { FavouriteButton } from "./FavouriteButton.js";
import VersionWarning from "./VersionWarning.js";

type Props = {
  meta: RawSnapshotData["meta"];
  direct?: boolean;
};

export default function MetaInfo({ meta, direct }: Props) {
  const [now, setNow] = useState(new Date());
  const date = useMemo(() => new Date(meta.timestamp), [meta.timestamp]);
  const humanDate = useMemo(
    () =>
      intlFormat(date, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }),
    [date],
  );

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const timeago = useMemo(
    () => formatDistance(date, now, { addSuffix: true }),
    [now, date],
  );

  return (
    <HStack fontSize="large" spacing="0.25em" wrap="wrap">
      <Text title={`r${meta.revision}`}>{`${
        direct ? "Private s" : "S"
      }napshot`}</Text>{" "}
      <Text>by</Text>{" "}
      <Text fontWeight="bold" title={`Player #${meta.id}`}>
        {meta.name}
      </Text>{" "}
      <Text>from</Text> <Text title={humanDate}>{timeago}</Text>
      <VersionWarning current={VERSION} data={meta.version} />
      {!direct && <FavouriteButton />}
    </HStack>
  );
}
