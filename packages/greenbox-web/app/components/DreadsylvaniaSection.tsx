import { useAppSelector } from "../hooks.js";
import { selectIdToPlayerItems } from "../store/index.js";

import DreadsylvaniaSkills from "./DreadsylvaniaSkills.js";
import ItemGrid from "./ItemGrid.js";
import Section from "./Section.js";
import Subsection from "./Subsection.js";

const THE_TERRIFIED_EAGLE_INN = [
  6423, // Tales of Dread
  6428, // brass Dreadsylvanian flask
  6429, // silver Dreadsylvanian flask
  6430, // dreadful fedora
  6431, // dreadful sweater
  6432, // dreadful glove
];

const OTHER_UNTRADABLES = [
  6495, // Dreadsylvania Auditor's badge
  6501, // moon-amber necklace
  6504, // hangman's hood
  6505, // cursed ring finger ring
  6508, // cool iron helmet
  6509, // cool iron breastplate
  6510, // cool iron greaves
  6511, // ghost shawl
  6545, // weedy skirt
];

const FALLS_FROM_SKY = [
  6440, // Covers-Your-Head
  6441, // Drapes-You-Regally
  6442, // Warms-Your-Tush
  6443, // Helps-You-Sleep
  6444, // Quiets-Your-Steps
  6445, // Protects-Your-Junk
];

const GREAT_WOLF_OF_THE_AIR = [
  6447, // Great Wolf's headband
  6448, // Great Wolf's left paw
  6449, // Great Wolf's right paw
  6450, // Great Wolf's rocket launcher
  6451, // Great Wolf's beastly trousers
  6452, // Great Wolf's lice
];

const ZOMBIE_HOMEOWNERS_ASSOCIATION = [
  6454, // zombie mariachi hat
  6455, // zombie accordion
  6456, // zombie mariachi pants
  6457, // HOA regulation book
  6458, // HOA zombie eyes
  6459, // HOA citation pad
];

const MAYOR_GHOST = [
  6462, // Mayor Ghost's toupee
  6463, // Mayor Ghost's cloak
  6464, // Mayor Ghost's khakis
  6465, // Mayor Ghost's gavel
  6466, // Mayor Ghost's sash
  6467, // Mayor Ghost's scissors
];

const COUNT_DRUNKULA = [
  6469, // Thunkula's drinking cap
  6470, // Drunkula's cape
  6471, // Drunkula's silky pants
  6472, // Drunkula's bell
  6473, // Drunkula's ring of haze
  6474, // Drunkula's wineglass
];

const THE_UNKILLABLE_SKELETON = [
  6476, // Unkillable Skeleton's skullcap
  6477, // Unkillable Skeleton's breastplate
  6478, // Unkillable Skeleton's shinguards
  6479, // Unkillable Skeleton's sawsword
  6480, // Unkillable Skeleton's shield
  6481, // Unkillable Skeleton's restless leg
];

export default function DreadsylvaniaSection() {
  const playerItems = useAppSelector(selectIdToPlayerItems);

  return (
    <Section
      title="Dreadsylvania"
      icon="itemimages/dvtat.gif"
      loading={false}
      values={[]}
      max={1}
    >
      <DreadsylvaniaSkills />
      <Subsection
        title="The Terrified Eagle Inn"
        image="itemimages/dv_krueggerand.gif"
      >
        <ItemGrid
          items={THE_TERRIFIED_EAGLE_INN}
          playerItems={THE_TERRIFIED_EAGLE_INN.map(
            (id) => playerItems[id]?.[1] ?? 0,
          )}
        />
      </Subsection>
      <Subsection title="Other Untradables" image="itemimages/dv_badge.gif">
        <ItemGrid
          items={OTHER_UNTRADABLES}
          playerItems={OTHER_UNTRADABLES.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Falls-From-Sky" image="itemimages/bb_speedo.gif">
        <ItemGrid
          items={FALLS_FROM_SKY}
          playerItems={FALLS_FROM_SKY.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection
        title="Great Wolf of the Air"
        image="itemimages/ww_bazooka.gif"
      >
        <ItemGrid
          items={GREAT_WOLF_OF_THE_AIR}
          playerItems={GREAT_WOLF_OF_THE_AIR.map(
            (id) => playerItems[id]?.[1] ?? 0,
          )}
        />
      </Subsection>
      <Subsection
        title="Zombie Homeowners' Association"
        image="itemimages/zh_pad.gif"
      >
        <ItemGrid
          items={ZOMBIE_HOMEOWNERS_ASSOCIATION}
          playerItems={ZOMBIE_HOMEOWNERS_ASSOCIATION.map(
            (id) => playerItems[id]?.[1] ?? 0,
          )}
        />
      </Subsection>
      <Subsection title="Mayor Ghost" image="itemimages/mg_gavel.gif">
        <ItemGrid
          items={MAYOR_GHOST}
          playerItems={MAYOR_GHOST.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="Count Drunkula" image="itemimages/dr_wineglass.gif">
        <ItemGrid
          items={COUNT_DRUNKULA}
          playerItems={COUNT_DRUNKULA.map((id) => playerItems[id]?.[1] ?? 0)}
        />
      </Subsection>
      <Subsection title="The Unkillable Skeleton" image="itemimages/sk_leg.gif">
        <ItemGrid
          items={THE_UNKILLABLE_SKELETON}
          playerItems={THE_UNKILLABLE_SKELETON.map(
            (id) => playerItems[id]?.[1] ?? 0,
          )}
        />
      </Subsection>
    </Section>
  );
}
