const MAFIA_DATA_BASE = "https://raw.githubusercontent.com/kolmafia/kolmafia/main/src/data";

export async function loadMafiaData(fileName: string, lastKnownSize = 0) {
  const url = `${MAFIA_DATA_BASE}/${fileName}.txt`;
  if (lastKnownSize > 0) {
    const sizeCheck = await fetch(url, { method: "HEAD" });
    const newSize = Number(sizeCheck.headers.get("Content-Length") ?? 1);
    if (newSize === lastKnownSize) return null;
  }

  const request = await fetch(url);
  const raw = await request.text();
  return {
    data: raw
      .split("\n")
      .slice(1)
      .filter((r) => r !== "" && !r.startsWith("#"))
      .map((r) => r.split("\t")),
    size: Number(request.headers.get("Content-Length")),
  };
}
