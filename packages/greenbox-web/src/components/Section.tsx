import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
} from "@chakra-ui/react";

import AlphaImage from "./AlphaImage";
import Progress from "./Progress";
import Spinner from "./Spinner";
import WikiSearchLink from "./WikiSearchLink";

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
    <AccordionItem isDisabled={loading}>
      <Stack direction="row">
        <AccordionButton fontSize="3xl">
          <Stack direction="row" flex="1" textAlign="left">
            <AlphaImage src={icon} />
            <Heading fontSize={["xl", null, "3xl"]} fontWeight="normal">
              {title}
            </Heading>
          </Stack>
          <Box alignSelf="stretch" flex="1 1">
            <Progress values={values} max={max} />
          </Box>
          {loading ? <Spinner /> : <AccordionIcon />}
        </AccordionButton>
        <WikiSearchLink
          page={wiki ?? title}
          text="?"
          fontSize="small"
        ></WikiSearchLink>
      </Stack>
      <AccordionPanel>
        <Stack spacing={4}>{children}</Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
