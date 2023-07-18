import DreadsylvaniaSkills from "./DreadsylvaniaSkills";
import Section from "./Section";

export default function DreadsylvaniaSection() {
  return (
    <Section title="Dreadsylvania" icon="itemimages/dvtat.gif" loading={false} values={[]} max={1}>
      <DreadsylvaniaSkills />
    </Section>
  );
}
