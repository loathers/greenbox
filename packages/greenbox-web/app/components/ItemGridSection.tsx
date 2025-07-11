import { useAppSelector } from "../hooks.js";
import { selectIdToPlayerItems } from "../store/index.js";

import ItemGrid from "./ItemGrid.js";
import Section from "./Section.js";

type Props = {
  title: string;
  icon: string;
  items: number[];
};

export default function ItemGridSection({ title, icon, items }: Props) {
  const playerItems = useAppSelector(selectIdToPlayerItems);

  return (
    <Section title={title} icon={icon} loading={false} values={[]} max={1}>
      <ItemGrid
        items={items}
        playerItems={items.map((id) => playerItems[id]?.[1] ?? 0)}
      />
    </Section>
  );
}
