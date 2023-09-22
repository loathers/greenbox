import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

export const sortByKey =
  <T extends Record<string, any>>(key: keyof T) =>
  (a: T, b: T) => {
    const aVal = a[key] || 0;
    const bVal = b[key] || 0;
    if (aVal < bVal) return -1;
    if (aVal > bVal) return 1;
    return 0;
  };

type Props<T> = {
  onChange: (value: T) => any;
  value: T;
  alphabeticalKey: T;
  chronologicalKey: T;
};

export function SortOrderSelect<T extends string>({
  onChange,
  value,
  alphabeticalKey,
  chronologicalKey,
}: Props<T>) {
  return (
    <RadioGroup size="sm" onChange={onChange} value={value}>
      <Stack direction="row" justifyContent="end">
        <Radio value={alphabeticalKey}>Alphabetical</Radio>
        <Radio value={chronologicalKey}>Chronological</Radio>
      </Stack>
    </RadioGroup>
  );
}
