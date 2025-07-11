import { Accordion, Box, Heading, Stack } from "@chakra-ui/react";

import AlphaImage from "./AlphaImage.js";
import Progress from "./Progress.js";
import Spinner from "./Spinner.js";
import WikiSearchLink from "./WikiSearchLink.js";

interface Props extends React.PropsWithChildren {
  title: string;
  wiki?: string;
  icon: string;
  loading?: boolean;
  values: React.ComponentProps<typeof Progress>["values"];
  max: number;
}

export default function Section({
  title,
  wiki,
  icon,
  loading = false,
  values,
  max,
  children,
}: Props) {
  return (
    <Accordion.Item value={title} disabled={loading}>
      <Stack direction="row">
        <Accordion.ItemTrigger fontSize="3xl">
          <Stack direction="row" flex="1" textAlign="left">
            <AlphaImage src={icon} />
            <Heading fontSize={["xl", null, "3xl"]} fontWeight="normal">
              {title}
            </Heading>
          </Stack>
          <Box alignSelf="stretch" flex="1 1">
            <Progress values={values} max={max} />
          </Box>
          {loading ? <Spinner /> : <Accordion.ItemIndicator />}
        </Accordion.ItemTrigger>
        <WikiSearchLink
          page={wiki ?? title}
          text="?"
          fontSize="small"
        ></WikiSearchLink>
      </Stack>
      <Accordion.ItemContent>
        <Stack gap={4}>{children}</Stack>
      </Accordion.ItemContent>
    </Accordion.Item>
  );
}
