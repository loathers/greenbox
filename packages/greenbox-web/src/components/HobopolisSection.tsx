import { SimpleGrid } from "@chakra-ui/react";

import { useAppSelector } from "../hooks";
import { selectIdToPlayerItems } from "../store";

import ItemGrid from "./ItemGrid";
import Section from "./Section";
import Skill from "./Skill";
import Subsection from "./Subsection";

const JOURNAL_SKILLS = [
  38, // Natural Born Scrabbler
  39, // Thrift and Grift
  40, // Abs of Tin
  41, // Marginally Insane
];

const WEAK_ELEMENTAL = [
  29, // Conjure Relaxing Campfire
  31, // Maximum Chill
  33, // Mudbath
  37, // Inappropriate Backrub
  43, // Creepy Lullaby
] as const;

const STRONG_ELEMENTAL = [
  28, // Awesome Balls of Fire
  30, // Snowclone
  32, // Eggsplosion
  36, // Grease Lightning
  42, // Raise Backup Dancer
] as const;

const NICKLE_EQUIPMENT = [
  3220, // hobo code binder
  3328, // crumpled felt fedora
  3329, // battered old top-hat
  3330, // shapeless wide-brimmed hat
  3331, // mostly rat-hide leggings
  3332, // hobo dungarees
  3333, // old patched suit-pants
  3140, // old soft shoes
  3334, // hobo stogie
  3335, // rope with some soap on it
  3404, // deck of lewd playing cards
];

const HOBO_INSTRUMENTS = [
  3310, // sealskin drum
  3311, // washboard shield
  3312, // spaghetti-box banjo
  3313, // marinara jug
  3314, // makeshift castanets
  3315, // left-handed melodica
];

const CHESTER = [
  3260, // Chester's moustache
  3261, // Chester's bag of candy
  3262, // Chester's cutoffs
  3383, // Chester's sunglasses
  3384, // Chester's muscle shirt
  3385, // Chester's Aquarius medallion
];

const FROSTY = [
  3251, // Frosty's old silk hat
  3252, // Frosty's carrot
  3253, // Frosty's nailbat
  3286, // Frosty's snowball sack
  3389, // Frosty's arm
  3391, // Frosty's iceball
];

const OL_SCRATCH = [
  3246, // Ol' Scratch's ol' britches
  3247, // Ol' Scratch's stovepipe hat
  3248, // Ol' Scratch's ash can
  3380, // Ol' Scratch's infernal pitchfork
  3381, // Ol' Scratch's stove door
  3382, // Ol' Scratch's manacles
];

const OSCUS = [
  3254, // Oscus's pelt
  3255, // Wand of Oscus
  3256, // Oscus's dumpster waders
  3392, // Oscus's garbage can lid
  3393, // Oscus's neverending soda
  3394, // Oscus's flypaper pants
];

const ZOMBO = [
  3257, // Zombo's skullcap
  3258, // Zombo's shield
  3259, // Zombo's grievous greaves
  3386, // Zombo's shoulder blade
  3387, // Zombo's skull ring
  3388, // Zombo's empty eye
];

const UNCLE_HOBO = [
  4845, // Uncle Hobo's stocking cap
  4846, // Uncle Hobo's epic beard
  4847, // Uncle Hobo's gift baggy pants
  4848, // Uncle Hobo's fingerless tinsel gloves
  4849, // Uncle Hobo's highest bough
  4850, // Uncle Hobo's belt
];

const HODGEMAN = [
  3395, // Hodgman's porkpie hat
  3396, // Hodgman's lobsterskin pants
  3397, // Hodgman's bow tie
  3405, // Hodgman's lucky sock
  3406, // Hodgman's varcolac paw
  3407, // Hodgman's almanac
  3408, // Hodgman's harmonica
  3409, // Hodgman's garbage sticker
  3410, // Hodgman's metal detector
  3411, // Hodgman's cane
];

export default function HobopolisSection() {
  const playerItems = useAppSelector(selectIdToPlayerItems);

  return (
    <Section
      title="Hobopolis"
      icon="otherimages/sigils/hobotat19.gif"
      loading={false}
      values={[]}
      max={1}
    >
      <Subsection
        title="Hodgman's Journal Skills"
        image="itemimages/blacknotebook.gif"
      >
        <SimpleGrid columns={6} spacing={1}>
          {JOURNAL_SKILLS.map((id) => (
            <Skill key={id} id={id} />
          ))}
        </SimpleGrid>
      </Subsection>
      <Subsection title="Weak Elemental Skills" image="itemimages/book3.gif">
        <SimpleGrid columns={6} spacing={1}>
          {WEAK_ELEMENTAL.map((id) => (
            <Skill key={id} id={id} />
          ))}
        </SimpleGrid>
      </Subsection>
      <Subsection title="Strong Elemental Skills" image="itemimages/book4.gif">
        <SimpleGrid columns={6} spacing={1}>
          {STRONG_ELEMENTAL.map((id) => (
            <Skill key={id} id={id} />
          ))}
        </SimpleGrid>
      </Subsection>
      <Subsection title="Hobo Nickles" image="itemimages/nickel.gif">
        <ItemGrid
          items={NICKLE_EQUIPMENT}
          playerItems={NICKLE_EQUIPMENT.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Hobo Instruments" image="itemimages/triangle.gif">
        <ItemGrid
          items={HOBO_INSTRUMENTS}
          playerItems={HOBO_INSTRUMENTS.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Chester" image="itemimages/chestache.gif">
        <ItemGrid
          items={CHESTER}
          playerItems={CHESTER.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Frosty" image="itemimages/frostyhat.gif">
        <ItemGrid
          items={FROSTY}
          playerItems={FROSTY.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Ol' Scratch" image="itemimages/pitchfork2.gif">
        <ItemGrid
          items={OL_SCRATCH}
          playerItems={OL_SCRATCH.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Oscus" image="itemimages/oscuswand.gif">
        <ItemGrid
          items={OSCUS}
          playerItems={OSCUS.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Zombo" image="itemimages/zomboshield.gif">
        <ItemGrid
          items={ZOMBO}
          playerItems={ZOMBO.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Uncle Hobo" image="itemimages/litcigar.gif">
        <ItemGrid
          items={UNCLE_HOBO}
          playerItems={UNCLE_HOBO.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Hodgman" image="itemimages/stuffhodg.gif">
        <ItemGrid
          items={HODGEMAN}
          playerItems={HODGEMAN.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
    </Section>
  );
}
