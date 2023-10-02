import { ClassDef, ItemStatus, SkillDef, SkillStatus, tuple } from "greenbox-data";

export function itemStatusToThingState(status: ItemStatus) {
  if (status > 0) return "complete";
  return null;
}

export function skillStatusToThingState(status: SkillStatus) {
  switch (status) {
    case SkillStatus.HARDCORE:
      return "complete";
    case SkillStatus.SOFTCORE:
      return "partial";
    default:
      return null;
  }
}

export function skillStatusToTitle(status: SkillStatus) {
  switch (status) {
    case SkillStatus.HARDCORE:
      return "Hardcore permed";
    case SkillStatus.SOFTCORE:
      return "Softcore permed";
    default:
      return "Not permed";
  }
}

export const chunk = <T>(arr: T[], size: number) =>
  Array(Math.ceil(arr.length / size))
    .fill(0)
    .map((_, i) => arr.slice(i * size, i * size + size));

export function notNullOrUndefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export enum SkillBuckets {
  Gnome = 0.1,
  PvP = 0.2,
  Dreadsylvania = 0.31,
  Hobopolis = 0.3,
  SlimeTube = 0.32,
}

export function getSkillBucket(s: SkillDef) {
  if (s.id >= 10 && s.id <= 14) {
    return SkillBuckets.Gnome;
  }

  if ([80, 81, 121, 128, 134, 135, 144, 180, 7254].includes(s.id)) {
    return SkillBuckets.PvP;
  }

  if ((s.id >= 28 && s.id <= 43) || s.id === 56 || s.id === 57) {
    return SkillBuckets.Hobopolis;
  }

  if (s.id >= 46 && s.id <= 48) {
    return SkillBuckets.SlimeTube;
  }

  if (s.id >= 92 && s.id <= 106) {
    return SkillBuckets.Dreadsylvania;
  }

  return Math.floor(s.id / 1000);
}

export function getSkillHeader(bucket: number, cls: ClassDef) {
  if (cls) return [cls.name, `itemimages/${cls.image}.gif`];

  switch (bucket) {
    case 0:
      return ["Other", "itemimages/book.gif"];
    case SkillBuckets.Gnome:
      return ["Gnomish Gnomad Camp", "itemimages/tinygnome.gif"];
    case SkillBuckets.PvP:
      return ["PvP", "itemimages/swords.gif"];
    case SkillBuckets.Dreadsylvania:
      return ["Dreadsylvania", "itemimages/dvtat.gif"];
    case SkillBuckets.Hobopolis:
      return ["Hobopolis", "otherimages/sigils/hobotat19.gif"];
    case SkillBuckets.SlimeTube:
      return ["Slime Tube", "itemimages/slimeling.gif"];
    default:
      return ["Unknown", "itemimages/book.gif"];
  }
}

export function unzip<X, Y>(array: [X, Y][]) {
  return array.reduce(
    ([x, y], [a, b]) =>
      tuple([
        [...x, a],
        [...y, b],
      ]),
    tuple([[] as X[], [] as Y[]]),
  );
}
