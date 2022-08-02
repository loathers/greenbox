import { useTheme } from "@chakra-ui/react";
import { useMemo } from "react";
import { render } from "react-dom";
import { BarChart, Bar, YAxis, XAxis, LabelList, ResponsiveContainer, LabelProps } from "recharts";

const renderLabel = ({ width, height, value, offset, name, ...props }: LabelProps) => {
  const x = Number(props.x) + Number(width) / 2;
  const y = Number(props.y) + Number(height) / 2;
  return (
    <text
      name={name}
      className="recharts-text recharts-label"
      x={x}
      y={y}
      width={width}
      height={height}
      offset={offset}
      textAnchor="middle"
      fontSize="40%"
    >
      <title>{name}</title>
      <tspan x={x} dy="0.355em">
        {value}
      </tspan>
    </text>
  );
};

type Props = {
  values: { color: string; value: number; name?: string }[];
  max: number;
};

export default function Progress({ values, max }: Props) {
  const theme = useTheme();

  const data = useMemo(
    () => [
      values.reduce((acc, v, i) => ({ ...acc, [i.toString()]: v.value }), {
        name: "progress bar",
      }),
    ],
    [values]
  );

  return (
    <ResponsiveContainer height={30} width="50%">
      <BarChart data={data} layout="vertical">
        <XAxis type="number" hide domain={[0, max]} />
        <YAxis type="category" dataKey="name" hide />
        {values.map((v, i) => (
          <Bar
            key={i.toString()}
            dataKey={i.toString()}
            stackId="s"
            fill={theme.colors[v.color] || v.color}
            {...(i === 0 ? { background: { fill: "#eee" } } : {})}
          >
            <LabelList
              dataKey={i.toString()}
              position="center"
              fontSize="40%"
              name={v.name}
              content={renderLabel}
            />
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
