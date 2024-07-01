import { Accordion } from "@chakra-ui/react";

import ItemGridSection from "./ItemGridSection";

const RODORIC = [
  2578, // Staff of the Short Order Cook
  2601, // Staff of the Midnight Snack
  2602, // Staff of Blood and Pudding
  2722, // Staff of the Greasefire
  2723, // Staff of the Grand Flambé
  2740, // Staff of the Walk-In Freezer
  2749, // Staff of the Grease Trap
  2826, // Staff of the Kitchen Floor
  3390, // Staff of the Deepest Freeze
  3436, // Staff of the Teapot Tempest
  3437, // Staff of the Black Kettle
  3438, // Staff of the Well-Tempered Cauldron
  4165, // Staff of the Soupbone
  5758, // Staff of Holiday Sensations
  5761, // Staff of the Scummy Sink
  6482, // Staff of the Roaring Hearth
  7351, // Staff of the Electric Range
  9894, // Staff of Kitchen Royalty
  10035, // Staff of Frozen Lard
  10424, // Staff of the Peppermint Twist
];

const SWAGGER = [
  5656, // Huggler Radio
  5659, // insulting hat
  5660, // offensive moustache
  5661, // hairshirt
  5663, // cursed microwave
  5664, // cursed pony keg
  5668, // bagged stuffed "L"
  5669, // stuffed club
  5674, // stuffed "L"
  8283, // The Cocktail Shaker
  9123, // School of Hard Knocks Diploma
  10207, // [glitch season reward name]
  10325, // Law of Averages
  10640, // Universal Seasoning
];

const ULTRA_RARE = [
  875, // crazy bastard sword
  876, // incredibly dense meat gem
  877, // Talisman of Baio
  878, // hypnodisk
  1236, // hockey stick of furious angry rage
  1519, // Talisman of Bakula
  1687, // Platinum Yendorian Express Card
  1795, // Counterclockwise Watch
  2097, // 17-ball
  2847, // Dallas Dynasty Falcon Crest shield
  6592, // optimal spreadsheet
  7201, // The Nuge's favorite crossbow
  9117, // repaid diaper
];

export default function OtherItems() {
  return (
    <Accordion allowMultiple>
      <ItemGridSection
        title="Rodoric, the Staffcrafter"
        icon="itemimages/meatstaff.gif"
        items={RODORIC}
      />
      <ItemGridSection
        title="Jack's Swagger Shack"
        icon="itemimages/angry.gif"
        items={SWAGGER}
      />
      <ItemGridSection
        title="Ultra Rare"
        icon="itemimages/ribbon.gif"
        items={ULTRA_RARE}
      />
    </Accordion>
  );
}
