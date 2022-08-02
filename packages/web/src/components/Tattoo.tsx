import { TattooDef } from "data";

import Thing from "./Thing";

type Props = {
  tattoo: TattooDef;
  have: boolean;
};

export default function Tattoo({ tattoo, have }: Props) {
  const state = have ? "complete" : null;
  const title = `${tattoo.name} (${state ? "Have" : "Do not have"})`;
  return (
    <Thing
      name={tattoo.name}
      image={`otherimages/sigils/${tattoo.image}.gif`}
      sourceWidth={50}
      state={state}
      title={title}
    />
  );
}
