import { Box } from "@chakra-ui/react";
import he from "he";

import AlphaImage from "./AlphaImage";

type Props = { titles: string[]; images: string[]; active: number; overlap?: number };

export default function ImageParty({ titles, images, active, overlap = 10 }: Props) {
  return (
    <Box ml={`${overlap}px`}>
      {images.map((image, i) => (
        <Box
          title={he.decode(titles[i])}
          key={image}
          ml={`-${overlap}px`}
          display="inline-block"
          position="relative"
          zIndex={i === active ? 2 : 1}
          filter={`brightness(${i === active ? 1 : 0.8})`}
        >
          <AlphaImage src={`itemimages/${image}`} sourceWidth={30} />
        </Box>
      ))}
    </Box>
  );
}
