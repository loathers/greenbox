import { Stack } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { RootState } from "../store";

import Path from "./Path";
import Section from "./Section";

export default function Paths() {
  const paths = useSelector((state: RootState) => state.paths);
  const loading = useSelector((state: RootState) => state.loading.paths || false);

  return (
    <Section
      title="Paths"
      icon="itemimages/elfsign.gif"
      loading={loading}
      values={[]}
      max={paths.length}
    >
      <Stack>
        {paths.map((p) => (
          <Path key={p.name} path={p} />
        ))}
      </Stack>
    </Section>
  );
}
