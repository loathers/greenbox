import { SystemStyleObject } from "@chakra-ui/react";
import Color from "color";
import { useEffect, useMemo, useState } from "react";

import Image from "./Image";

function createAlphaMask(data: Uint8ClampedArray, width: number) {
  const mask = new Uint8ClampedArray(data.length).fill(255);
  const visited = new Set();

  const valid = (i: number) => i >= 0 && i < data.length && !visited.has(i);

  function eraser(i: number) {
    // Don't revist or go out of bounds
    if (!valid(i)) return;

    visited.add(i);

    // If we've hit a black-ish cell, we don't want to look around for more white-ish cells.
    const color = Color.rgb(...data.slice(i, i + 3));
    if (color.luminosity() < 0.6) {
      return;
    }

    // Set pixel to white in mask
    mask[i] = mask[i + 1] = mask[i + 2] = mask[i + 3] = 0;

    // And visit neighbours
    try {
      [i - width * 4, i + 4, i + width * 4, i - 4]
        .filter(valid)
        .forEach(eraser);
    } catch (e) {
      return;
    }
  }

  // Start an erase process from each corner
  [0, width * 4 - 8, data.length - width * 4, data.length - 8].forEach(eraser);

  return mask;
}

type Props = {
  src: string;
  sourceWidth?: number;
  sourceHeight?: number;
  title?: string;
  width?: string | number;
  height?: string | number;
} & React.ComponentProps<typeof Image>;

export default function AlphaImage({
  src,
  title,
  sourceWidth = 30,
  sourceHeight = sourceWidth,
  width = sourceWidth,
  height = sourceHeight,
  ...props
}: Props) {
  const [maskImage, setMaskImage] = useState({} as SystemStyleObject);
  const url = useMemo(
    () => `https://s3.amazonaws.com/images.kingdomofloathing.com/${src}`,
    [src],
  );

  useEffect(() => {
    const key = `alphamask-${src}`;
    const cached = localStorage.getItem(key);
    if (cached) {
      setMaskImage({
        maskImage: `url(${cached})`,
        maskSize: "100% 100%",
      });
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = sourceWidth;
    canvas.height = sourceHeight;
    const ctx = canvas.getContext("2d")!;

    async function storeMask() {
      const image = await fetch(url);
      const blob = await image.blob();
      const imageBitmap = await createImageBitmap(blob);
      ctx.drawImage(imageBitmap, 0, 0);
      const imageData = ctx.getImageData(0, 0, sourceWidth, sourceHeight);
      const maskData = createAlphaMask(imageData.data, sourceWidth);
      const d = new ImageData(maskData, sourceWidth, sourceHeight);
      ctx.putImageData(d, 0, 0);
      const data = canvas.toDataURL();
      localStorage.setItem(key, data);
      setMaskImage({
        maskImage: `url(${data})`,
        maskSize: "100% 100%",
      });
    }

    storeMask();
  }, [url, src]);

  return (
    <Image
      alt={title}
      src={url}
      width={width}
      height={height}
      sx={maskImage}
      {...props}
    />
  );
}
