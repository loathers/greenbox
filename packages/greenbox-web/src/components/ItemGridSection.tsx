import { useAppSelector } from "../hooks";
import { selectIdToPlayerItems } from "../store";

import ItemGrid from "./ItemGrid";
import Section from "./Section";

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
