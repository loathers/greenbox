import { FamiliarDef } from "greenbox-data";

import Medal from "./Medal";
import Thing from "./Thing";

type Props = {
  familiar: FamiliarDef;
  hatchling: boolean;
  terrarium: boolean;
  hundredPercent: boolean;
};

export default function Familiar({ familiar, terrarium, hatchling, hundredPercent }: Props) {
  const state = terrarium ? "complete" : hatchling ? "partial" : null;
  const title = `${familiar.name} (${
    terrarium ? "Have in terrarium" : hatchling ? "Have as hatchling" : "Do not have"
  })`;
  return (
    <Thing
      name={familiar.name}
      image={`itemimages/${familiar.image}`}
      state={state}
      title={title}
      badges={hundredPercent ? <Medal title="100% run" /> : null}
    />
  );
}
