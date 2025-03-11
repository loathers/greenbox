import { RadioGroup, Stack } from "@chakra-ui/react";

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
    <RadioGroup.Root
      size="sm"
      onValueChange={(e) => onChange(e.value as T)}
      value={value}
    >
      <Stack direction="row" justifyContent="end">
        <RadioGroup.Item value={alphabeticalKey}>
          <RadioGroup.ItemHiddenInput />
          <RadioGroup.ItemIndicator />
          <RadioGroup.ItemText>Alphabetical</RadioGroup.ItemText>
        </RadioGroup.Item>
        <RadioGroup.Item value={chronologicalKey}>
          <RadioGroup.ItemHiddenInput />
          <RadioGroup.ItemIndicator />
          <RadioGroup.ItemText>Chronological</RadioGroup.ItemText>
        </RadioGroup.Item>
      </Stack>
    </RadioGroup.Root>
  );
}
