import { ClassDef } from "greenbox-data";

import { getSkillHeader } from "../utils";

import Medal from "./Medal";
import Subsection from "./Subsection";

type Props = React.PropsWithChildren<{ bucket: number; cls: ClassDef; medal: boolean }>;

export default function SkillBucket({ bucket, cls, medal, children }: Props) {
  const [name, image] = getSkillHeader(bucket, cls);

  return (
    <Subsection
      title={name}
      image={image}
      right={medal && cls && <Medal title="100% marked hardcore permanent" />}
    >
      {children}
    </Subsection>
  );
}
