import tattooData from "./tattoos.json";

export type TattooDef = typeof tattooData[number];

export function loadTattoos(): TattooDef[] {
    return tattooData;
}