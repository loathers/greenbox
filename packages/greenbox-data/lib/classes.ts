import classes from "../data/classes";

export { ClassDef };

export function loadClasses(lastKnownSize: number) {
  const size = JSON.stringify(classes).length;

  if (size === lastKnownSize) return null;

  return {
    data: classes as unknown as ClassDef[],
    size: size,
  };
}
