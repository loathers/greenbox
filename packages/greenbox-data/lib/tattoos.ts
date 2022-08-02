export type TattooDef = {
  name: string;
  image: string;
};

export async function loadTattoos(): Promise<TattooDef[]> {
  const { default: t } = await import("../data/tattoos.json");
  return t;
}
