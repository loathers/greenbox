import { chakra, useTheme, useToken } from "@chakra-ui/react";
import { useMemo } from "react";
import { BarChart, Bar, YAxis, XAxis, ResponsiveContainer, LabelProps } from "recharts";

const Label = ({
  width,
  height,
  value,
  offset,
  title,
  ...props
}: LabelProps & { title?: string }) => {
  if (Number(value) <= 0) return null;

  const x = Number(props.x) + Number(width) / 2;
  const y = Number(props.y) + Number(height) / 2;

  return (
    <chakra.text
      name={title}
      fill="chakra-body-text"
      className="recharts-text recharts-label"
      x={x}
      y={y}
      offset={offset}
      textAnchor="middle"
      fontSize="40%"
    >
      <title>{title}</title>
      <tspan x={x} dy="0.355em">
        {value}
      </tspan>
    </chakra.text>
  );
};

type Props = {
  values: { color: string; value: number; name?: string }[];
  max: number;
};

export default function Progress({ values, max }: Props) {
  const [complete, accent] = useToken("colors", ["colors.complete", "colors.accent"]);

  const data = useMemo(
    () => [
      values.reduce((acc, v, i) => ({ ...acc, [i.toString()]: v.value }), {
        name: "progress bar",
      }),
    ],
    [values],
  );

  return (
    <ResponsiveContainer>
      <BarChart data={data} layout="vertical" margin={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <XAxis type="number" hide domain={[0, max]} />
        <YAxis type="category" dataKey="name" hide />
        <defs>
          <pattern id="partial" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <chakra.rect fill="chakra-body-bg" x="0" y="0" width="10" height="10"></chakra.rect>
            <chakra.rect fill="partial" x="0" width="5px" height="5px" y="0"></chakra.rect>
            <chakra.rect fill="partial" x="5" width="5px" height="5px" y="5"></chakra.rect>
          </pattern>
        </defs>
        {values.map((v, i) => (
          <Bar
            key={i}
            dataKey={i.toString()}
            stackId="s"
            fill={v.color === "partial" ? "url(#partial)" : complete}
            {...(i === 0 ? { background: { fill: accent } } : {})}
            label={<Label title={v.name} />}
            isAnimationActive={false}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
