import { CircularProgressProps } from "@chakra-ui/react";
import { chakra, HTMLChakraProps, keyframes, SystemStyleObject } from "@chakra-ui/system";
import { StringOrNumber, __DEV__ } from "@chakra-ui/utils";

const rotate = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const spin = keyframes({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0",
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100",
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260",
  },
});

interface CircleProps extends HTMLChakraProps<"circle"> {}

const Circle = (props: CircleProps) => (
  <chakra.circle cx={50} cy={50} r={42} fill="transparent" {...props} />
);

if (__DEV__) {
  Circle.displayName = "Circle";
}

interface ShapeProps extends HTMLChakraProps<"svg"> {
  size?: StringOrNumber;
  isIndeterminate?: boolean;
}

const Shape = (props: ShapeProps) => {
  const { size, isIndeterminate, ...rest } = props;
  return (
    <chakra.svg
      viewBox="0 0 100 100"
      __css={{
        width: size,
        height: size,
        animation: isIndeterminate ? `${rotate} 2s linear infinite` : undefined,
      }}
      {...rest}
    />
  );
};

if (__DEV__) {
  Shape.displayName = "Shape";
}

export interface CircularMultiProgressProps extends Omit<CircularProgressProps, "value" | "color"> {
  values?: number[];
  colors?: string[];
}

/**
 * CircularProgress is used to indicate the progress of an activity.
 * It is built using `svg` and `circle` components with support for
 * theming and `indeterminate` state
 *
 * @see Docs https://chakra-ui.com/circularprogress
 * @todo add theming support for circular progress
 */
export const CircularMultiProgress: React.FC<CircularMultiProgressProps> = (props) => {
  const {
    size = "48px",
    max = 100,
    min = 0,
    valueText,
    getValueText,
    values = [],
    capIsRound,
    children,
    thickness = "10px",
    colors = [],
    trackColor = "#edebe9",
    isIndeterminate,
    ...rest
  } = props;

  const rootStyles: SystemStyleObject = {
    display: "inline-block",
    position: "relative",
    verticalAlign: "middle",
    fontSize: size,
  };

  const bind = {
    "data-indeterminate": isIndeterminate ? "" : undefined,
    "aria-valuemax": max,
    "aria-valuemin": min,
    "aria-valuenow": isIndeterminate ? undefined : values.reduce((t, v) => t + v, 0),
    "aria-valuetext": valueText,
    role: "progressbar",
  };

  const [indicators] = values.reduce(
    ([acc, sum], v) => {
      const determinant = max === 0 ? 0 : (v / max) * 264;

      return [[...acc, [determinant, sum] as [number, number]], sum + determinant];
    },
    [[] as [number, number][], 0]
  );

  return (
    <chakra.div className="chakra-progress" {...bind} {...rest} __css={rootStyles}>
      <Shape size={size} isIndeterminate={isIndeterminate}>
        <Circle stroke={trackColor} strokeWidth={thickness} className="chakra-progress__track" />
        {isIndeterminate ? (
          <Circle
            stroke={colors?.[0] ?? "#0078d4"}
            strokeWidth={thickness}
            className="chakra-progress__indicator"
            strokeLinecap={capIsRound ? "round" : undefined}
            css={{ animation: `${spin} 1.5s linear infinite` }}
          />
        ) : (
          indicators.map(([determinant, sum], i) => {
            const indicatorProps = {
              strokeDashoffset: 66 + sum,
              strokeDasharray: `${determinant} ${264 - determinant}`,
              transitionProperty: "stroke-dasharray, stroke",
              transitionDuration: "0.6s",
              transitionTimingFunction: "ease",
            };

            return (
              <Circle
                key={i}
                stroke={colors[i]}
                strokeWidth={thickness}
                className="chakra-progress__indicator"
                strokeLinecap={capIsRound && i === values.length - 1 ? "round" : undefined}
                {...indicatorProps}
              />
            );
          })
        )}
      </Shape>
      {children}
    </chakra.div>
  );
};
