import tattoos from "../data/tattoos";

export type TattooDef = {
  name: string;
  image: string;
};

export function loadTattoos(): TattooDef[] {
  return tattoos;
}
