import { Accordion } from "@chakra-ui/react";

import ItemGridSection from "./ItemGridSection.js";

//// Quest Rewards
const MARTY = [
  2719, // hand-carved bokken
  2720, // hand-carved bow
  2721, // hand-carved staff
];

const POSTAL = [
  2848, // Gnomitronic Hyperspatial Demodulizer
];

const ESCAPE = [
  4962, // mysterious silver lapel pin
];

const SPOOKYRAVEN = [
  1972, // silver shrimp fork
  7318, // ghost of a necklace
  7319, // Elizabeth's Dollie
  7321, // Stephen's lab coat
];

//// IOTM quest rewards
const HYBORIA = [
  4041, // pig-iron helm
  4042, // pig-iron shinguards
  4043, // pig-iron bracers
];

const FUTURE = [
  4108, // monstrous monocle
  4109, // musty moccasins
  4110, // molten medallion
  4111, // brazen bracelet
  4112, // bitter bowtie
  4113, // bewitching boots
];

const REFLECTION = [
  4510, // walrus ice cream
  4511, // beautiful soup
  4512, // eggman noodles
  4513, // Vial of jus de larmes
  4515, // Lobster qua Grill
  4516, // missing wine
  4519, // ittah bittah hookah
];

const PSYCHOANALYTIC = [
  6057, // Meatcleaver
  6067, // Truthsayer
  6108, // Ginsu™
  6133, // White Dragon Fang
  6146, // Sword of Procedural Generation
  6157, // Byte
  6168, // Bloodbath
];

const GRIMSTONE = [
  7131, // silver cow creamer
  7134, // wolf whistle
  7137, // witch's bra
  7140, // spinning wheel
  7143, // hare pin
];

export default function QuestRewards() {
  return (
    <Accordion allowMultiple>
      <ItemGridSection
        title="Marty's Quest"
        icon="itemimages/balaclava.gif"
        items={MARTY}
      />
      <ItemGridSection
        title="Going Postal"
        icon="itemimages/comicbooks.gif"
        items={POSTAL}
      />
      <ItemGridSection
        title="The Pretty Good Escape"
        icon="itemimages/folder.gif"
        items={ESCAPE}
      />
      <ItemGridSection
        title="Spookyraven Manor"
        icon="itemimages/dollhouse.gif"
        items={SPOOKYRAVEN}
      />
      <ItemGridSection
        title="Hyboria? I don't even..."
        icon="itemimages/mem_robe.gif"
        items={HYBORIA}
      />
      <ItemGridSection
        title="Future"
        icon="itemimages/futurebox.gif"
        items={FUTURE}
      />
      <ItemGridSection
        title="A Moment of Reflection"
        icon="itemimages/revmap.gif"
        items={REFLECTION}
      />
      <ItemGridSection
        title="Psychoanalytic Jar"
        icon="itemimages/analjar_empty.gif"
        items={PSYCHOANALYTIC}
      />
      <ItemGridSection
        title="We All Wear Masks"
        icon="itemimages/grimstonemask.gif"
        items={GRIMSTONE}
      />
    </Accordion>
  );
}
