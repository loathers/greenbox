import { TrophyDef, TrophyStatus } from "greenbox-data";

import Thing from "./Thing.js";

type Props = {
  trophy: TrophyDef;
  status: TrophyStatus;
};

function trophyStatusToThingState(status: TrophyStatus) {
  switch (status) {
    case TrophyStatus.HAVE:
      return "complete";
    default:
      return null;
  }
}

function trophyStatusToTitle(status: TrophyStatus) {
  switch (status) {
    case TrophyStatus.HAVE:
      return "Have";
    default:
      return "Do not have";
  }
}

export default function Trophy({ trophy, status }: Props) {
  return (
    <Thing
      type="trophy"
      name={trophy.name}
      image={`otherimages/trophy/${trophy.image}.gif`}
      sourceWidth={100}
      state={trophyStatusToThingState(status)}
      title={trophyStatusToTitle(status)}
    />
  );
}
