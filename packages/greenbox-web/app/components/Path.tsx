import { Badge, Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { HARDCORE, ItemStatus, type PathDef, SOFTCORE } from "greenbox-data";
import { useMemo } from "react";

import { useAppSelector } from "../hooks.js";
import { selectPlayerFamiliars } from "../store/index.js";

import Familiar from "./Familiar.js";
import ItemGrid from "./ItemGrid.js";
import Subsection from "./Subsection.js";
import TattooGrid from "./TattooGrid.js";

const ROW_LABEL_RENDERERS: Record<number, (i: number) => React.ReactNode> = {
  [SOFTCORE]: (i: number) => 2015 + i,
  [HARDCORE]: (i: number) => (i === 0 ? null : 2015 + (i - 1)),
};

type Props = {
  path: PathDef;
  points: number;
  items: ItemStatus[];
  equipment: ItemStatus[];
  tattoos: number[];
};

export default function Path({
  path,
  points,
  items,
  equipment,
  tattoos,
}: Props) {
  const allFamiliars = useAppSelector((state) => state.familiars);
  const playerFamiliars = useAppSelector(selectPlayerFamiliars);

  const familiars = useMemo(() => {
    const pathFamiliars = path.familiars;
    if (!pathFamiliars) return [];
    return allFamiliars.filter((f) => pathFamiliars.includes(f.id));
  }, [allFamiliars, path]);

  const idToPlayerFamiliar = useMemo(
    () => Object.fromEntries(playerFamiliars.map((f) => [f[0], f])),
    [playerFamiliars],
  );

  return (
    <Subsection
      title={path.name}
      image={path.image}
      right={
        path.maxPoints > 0 && (
          <Box alignSelf="start" position="relative">
            <Badge
              title={`${points} points out of a possible ${path.maxPoints}`}
              position="absolute"
              top={0}
            >
              {points} / {path.maxPoints}
            </Badge>
          </Box>
        )
      }
    >
      {path.items.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Items
          </Heading>
          <ItemGrid items={path.items} playerItems={items} />
        </>
      )}
      {path.equipment.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Equipment
          </Heading>
          <ItemGrid
            items={path.equipment}
            playerItems={equipment}
            getRowLabel={ROW_LABEL_RENDERERS[path.id]}
          />
        </>
      )}
      {path.tattoos.length > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Tattoos
          </Heading>
          <TattooGrid
            tattoos={path.tattoos}
            getLevel={(t, i) => tattoos[i] || 0}
          />
        </>
      )}
      {(path.familiars?.length ?? 0) > 0 && (
        <>
          <Heading as="h4" textTransform="uppercase" fontSize="xs">
            Familiars
          </Heading>
          <SimpleGrid columns={6} gap={1}>
            {familiars.map((f) => (
              <Familiar
                key={f.id}
                familiar={f}
                status={idToPlayerFamiliar[f.id]?.[1] ?? 0}
              />
            ))}
          </SimpleGrid>
        </>
      )}
    </Subsection>
  );
}
