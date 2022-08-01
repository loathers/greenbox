import { FamiliarDef } from "../api";

import Thing from "./Thing";

type Props = {
  familiar: FamiliarDef;
  hatchling: boolean;
  terrarium: boolean;
};

export default function Familiar({ familiar, terrarium, hatchling }: Props) {
  const state = terrarium ? "complete" : hatchling ? "partial" : null;
  const title = `${familiar.name} (${
    terrarium
      ? "Have in terrarium"
      : hatchling
      ? "Have as hatchling"
      : "Do not have"
  })`;
  return (
    <Thing
      name={familiar.name}
      image={familiar.image}
      state={state}
      title={title}
    />
  );
}
