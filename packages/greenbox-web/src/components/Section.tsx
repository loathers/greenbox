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

interface Props extends React.PropsWithChildren {
  title: string;
  icon: string;
  loading?: boolean;
  values: React.ComponentProps<typeof Progress>["values"];
  max: number;
}

export default function Section({
  title,
  icon,
  loading = false,
  values,
  max,
  children,
}: Props) {
  return (
    <AccordionItem isDisabled={loading}>
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
      <AccordionPanel>
        <Stack spacing={4}>{children}</Stack>
      </AccordionPanel>
    </AccordionItem>
  );
}
