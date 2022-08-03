import tattoos from "../data/tattoos";

export type TattooDef = typeof tattoos[number];

export function loadTattoos(): readonly TattooDef[] {
  return tattoos;
}
