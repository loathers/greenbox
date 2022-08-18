import { SimpleGrid } from "@chakra-ui/react";
import { TattooDef } from "greenbox-data";

import Thing from "./Thing";

type Props = {
  tattoos: TattooDef[];
  playerTattoos: number[];
  maxTattooLevel: number[];
};

function levelToTitle(level: number, max: number) {
  if (max === 1) {
    return level === 1 ? "Have" : "Do not have";
  }

  return `${level < max ? "Partially have" : "Have"} (level ${level} / ${max})`;
}

export default function PathTattoos({ tattoos, playerTattoos, maxTattooLevel }: Props) {
  return (
    <SimpleGrid columns={6} spacing={1}>
      {tattoos.map(({ name, image }, index) => {
        const level = playerTattoos[index] || 0;
        const max = maxTattooLevel[index];
        const i = Array.isArray(image) ? image[Math.max(0, level - 1)] : image;

        const anchor = guessAnchorFromTattooImage(i);

        return (
          <Thing
            key={name}
            type="tattoo"
            name={name}
            image={`otherimages/sigils/${i}.gif`}
            sourceWidth={50}
            title={levelToTitle(level, max)}
            state={level === 0 ? null : level < max ? "partial" : "complete"}
            link={`Tattoo${anchor}`}
          />
        );
      })}
    </SimpleGrid>
  );
}

function guessAnchorFromTattooImage(i: string) {
  if (i.startsWith("class")) return i.endsWith("hc") ? "#Ascension_Tattoos" : "#Class_Tattoos";
  if (!isNaN(parseFloat(i[i.length - 1]))) return "#Ascension_Tattoos";
  return "";
}
