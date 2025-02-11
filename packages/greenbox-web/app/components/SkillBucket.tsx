import type { ClassType } from "data-of-loathing";

import { getSkillHeader } from "../utils.js";

import Medal from "./Medal.js";
import Subsection from "./Subsection.js";

type Props = React.PropsWithChildren<{
  bucket: number;
  cls: ClassType;
  medal: boolean;
}>;

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
