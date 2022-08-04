import { TattooDef, TattooStatus } from "greenbox-data";

import Thing from "./Thing";

type Props = {
  tattoo: TattooDef;
  status: TattooStatus;
};

function tattooStatusToThingState(status: TattooStatus) {
  switch (status) {
    case TattooStatus.HAVE:
      return "complete";
    case TattooStatus.HAVE_OUTFIT:
      return "partial";
    default:
      return null;
  }
}

function tattooStatusToTitle(status: TattooStatus) {
  switch (status) {
    case TattooStatus.HAVE:
      return "Have";
    case TattooStatus.HAVE_OUTFIT:
      return "Have necessary outfit";
    default:
      return "Do not have";
  }
}

export default function Tattoo({ tattoo, status }: Props) {
  return (
    <Thing
      name={tattoo.name}
      image={`otherimages/sigils/${tattoo.image}.gif`}
      sourceWidth={50}
      state={tattooStatusToThingState(status)}
      title={tattooStatusToTitle(status)}
    />
  );
}
