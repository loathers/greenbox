const MAFIA_DATA_BASE = "https://raw.githubusercontent.com/kolmafia/kolmafia/main/src/data";

export async function loadMafiaData(fileName: string) {
  const request = await fetch(`${MAFIA_DATA_BASE}/${fileName}.txt`);
  const raw = await request.text();
  return raw
    .split("\n")
    .slice(1)
    .filter((r) => r !== "" && !r.startsWith("#"))
    .map((r) => r.split("\t"));
}
