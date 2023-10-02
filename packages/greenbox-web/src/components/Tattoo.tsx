import { TattooDef, getMaxTattooLevel, isOutfitTattoo } from "greenbox-data";

import Thing from "./Thing";

type Props = {
  tattoo: TattooDef;
  level: number;
};

function determineState(tattoo: TattooDef, level: number, max: number) {
  if (isOutfitTattoo(tattoo) && level == 1) return "partial";
  if (level >= max) return "complete";
  if (level > 0) return "partial";
  return null;
}

function determineTitle(tattoo: TattooDef, level: number, max: number) {
  const step = max > 1 ? ` (level ${level} / ${max})` : "";
  if (isOutfitTattoo(tattoo) && level == 1) return "Have necessary outfit";
  if (level >= max) return "Have" + step;
  if (level > 0) return "Partially have" + step;
  return "Do not have" + step;
}

export default function Tattoo({ tattoo, level }: Props) {
  const max = getMaxTattooLevel(tattoo);
  const i = Array.isArray(tattoo.image) ? tattoo.image[0] : tattoo.image;
  const anchor = guessAnchorFromTattooImage(i);

  return (
    <Thing
      type="tattoo"
      name={tattoo.name}
      image={`otherimages/sigils/${i}.gif`}
      sourceWidth={50}
      state={determineState(tattoo, level, max)}
      title={determineTitle(tattoo, level, max)}
      link={`Tattoo${anchor}`}
    />
  );
}

function guessAnchorFromTattooImage(i: string) {
  if (i.startsWith("class")) return i.endsWith("hc") ? "#Ascension_Tattoos" : "#Class_Tattoos";
  if (!isNaN(parseFloat(i[i.length - 1]))) return "#Ascension_Tattoos";
  return "";
}
