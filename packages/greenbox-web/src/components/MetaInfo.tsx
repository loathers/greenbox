import { HStack, IconButton, Text } from "@chakra-ui/react";
import { formatDistance, intlFormat } from "date-fns";
import { RawSnapshotData } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

import { FavouriteButton } from "./FavouriteButton";
import Image from "./Image";

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

  const timeago = useMemo(() => formatDistance(date, now, { addSuffix: true }), [now, date]);

  return (
    <Text fontSize="large">
      <HStack spacing="0.25em">
        <span title={`r${meta.revision}`}>{direct ? "Private s" : "S"}napshot</span>
        <span>by</span>
        <b title={`Player #${meta.id}`}>{meta.name}</b>
        <span>from</span>
        <span title={humanDate}>{timeago}</span>
        {!direct && <FavouriteButton />}
      </HStack>
    </Text>
  );
}
