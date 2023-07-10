import { Text } from "@chakra-ui/react";
import { formatDistance, intlFormat } from "date-fns";
import { RawSnapshotData } from "greenbox-data";
import { useEffect, useMemo, useState } from "react";

type Props = {
  meta: RawSnapshotData["meta"];
};

export default function MetaInfo({ meta }: Props) {
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
      <span title={`r${meta.revision}`}>Snapshot</span> by{" "}
      <b title={`Player #${meta.id}`}>{meta.name}</b> from <span title={humanDate}>{timeago}</span>
    </Text>
  );
}
