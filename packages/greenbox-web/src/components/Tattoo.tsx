import {
  arrayOf,
  OutfitTattooStatus,
  TattooDef,
  getMaxTattooLevel,
  isMiscTattoo,
  isOutfitTattoo,
} from "greenbox-data";

import Thing from "./Thing.js";

type Props = {
  tattoo: TattooDef;
  level: number;
};

function determineState(tattoo: TattooDef, level: number, max: number) {
  if (isOutfitTattoo(tattoo) && level == OutfitTattooStatus.HAVE_OUTFIT)
    return "partial";
  if (level >= max) return "complete";
  if (level > 0) return "partial";
  return null;
}

function determineTitle(tattoo: TattooDef, level: number, max: number) {
  const step = max > 1 ? ` (level ${level} / ${max})` : "";
  if (isOutfitTattoo(tattoo) && level == OutfitTattooStatus.HAVE_OUTFIT)
    return "Have necessary outfit";
  if (level >= max) return "Have" + step;
  if (level > 0) return "Partially have" + step;
  return "Do not have" + step;
}

export default function Tattoo({ tattoo, level }: Props) {
  const max = getMaxTattooLevel(tattoo);

  // Show the current level of the tattoo, or the full version if no levels have been attained yet.
  const image = arrayOf(tattoo.image)[
    Math.min(max, level > 0 ? level : max) - 1
  ];

  return (
    <Thing
      type="tattoo"
      name={tattoo.name}
      image={`otherimages/sigils/${image}.gif`}
      sourceWidth={50}
      state={determineState(tattoo, level, max)}
      title={determineTitle(tattoo, level, max)}
      link={guessWikiLink(tattoo)}
    />
  );
}

function guessWikiLink(tattoo: TattooDef) {
  // Outfit tattos can be successfully determined by the Thing wiki resolver.
  if (isOutfitTattoo(tattoo)) return undefined;

  // The two upgradeable miscellaneous tattoos have their own wiki pages... but whatever.
  if (isMiscTattoo(tattoo)) return "Tattoo#Miscellaneous_Tattoos";

  // Class tattoo image names follow a pattern.
  const image = arrayOf(tattoo.image)[0];
  if (image.startsWith("class"))
    return image.endsWith("hc")
      ? "Tattoo#Ascension_Tattoos"
      : "Tattoo#Class_Tattoos";

  // If it is not an outfit or miscellaneous tattoo and it ends in a number, it's probably a "number of ascensions" tattoo.
  if (!isNaN(parseFloat(image[image.length - 1])))
    return "Tattoo#Ascension_Tattoos";

  // Otherwise fall back to the main page on tattoos.
  return "Tattoo";
}
