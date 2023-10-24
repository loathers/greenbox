import { SkillType } from "data-of-loathing";
import { SkillStatus } from "greenbox-data";

import { skillStatusToThingState, skillStatusToTitle } from "../utils";

import ImageParty from "./ImageParty";
import Thing from "./Thing";

type Props = {
  groupName: string;
  skills: SkillType[];
  statuses: SkillStatus[];
};

export default function MutexSkills({ groupName, skills, statuses }: Props) {
  const active = statuses.findIndex((s) => s > SkillStatus.NONE);

  return (
    <Thing
      link={skills[active]?.name ?? skills[0].name}
      type="skill"
      name={groupName}
      image={
        <ImageParty
          titles={skills.map((s) => s.name)}
          images={skills.map((s) => s.image)}
          active={active}
        />
      }
      state={skillStatusToThingState(statuses[active])}
      title={skillStatusToTitle(statuses[active])}
    />
  );
}
