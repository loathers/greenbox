import { FamiliarDef, FamiliarStatus } from "greenbox-data";

import Medal from "./Medal.js";
import Thing from "./Thing";

type Props = {
  familiar: FamiliarDef;
  status: FamiliarStatus;
  hundredPercent: boolean;
};

function familiarStatusToThingState(status: FamiliarStatus) {
  switch (status) {
    case FamiliarStatus.TERRARIUM:
      return "complete";
    case FamiliarStatus.HATCHLING:
      return "partial";
    default:
      return null;
  }
}

function familiarStatusToTitle(status: FamiliarStatus) {
  switch (status) {
    case FamiliarStatus.TERRARIUM:
      return "Have in terrarium";
    case FamiliarStatus.HATCHLING:
      return "Have as hatchling";
    default:
      return "Do not have";
  }
}

export default function Familiar({ familiar, status, hundredPercent }: Props) {
  return (
    <Thing
      type="familiar"
      name={familiar.name}
      image={`itemimages/${familiar.image}`}
      state={familiarStatusToThingState(status)}
      title={familiarStatusToTitle(status)}
      badges={hundredPercent ? <Medal title="100% run" /> : null}
    />
  );
}
