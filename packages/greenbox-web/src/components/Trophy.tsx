import { TrophyDef } from "greenbox-data";

import Thing from "./Thing";

type Props = {
  trophy: TrophyDef;
  have: boolean;
};

export default function Trophy({ trophy, have }: Props) {
  const state = have ? "complete" : null;
  const title = `${trophy.name} (${state ? "Have" : "Do not have"})`;
  return (
    <Thing
      name={trophy.name}
      image={`otherimages/trophy/${trophy.image}.gif`}
      sourceWidth={100}
      state={state}
      title={title}
    />
  );
}
