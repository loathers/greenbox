import { Image as ChakraImage } from "@chakra-ui/react";
import Color from "color";
import { useEffect, useMemo, useState } from "react";

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
      [i - width * 4, i + 4, i + width * 4, i - 4].filter(valid).forEach(eraser);
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
};

export default function AlphaImage({
  src,
  title,
  sourceWidth = 30,
  sourceHeight = sourceWidth,
}: Props) {
  const [maskImage, setMaskImage] = useState("");

  const url = useMemo(() => `https://s3.amazonaws.com/images.kingdomofloathing.com/${src}`, [src]);

  useEffect(() => {
    const key = `alphamask-${src}`;
    const cached = localStorage.getItem(key);
    if (cached) {
      setMaskImage(cached);
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = sourceWidth;
    canvas.height = sourceHeight;
    const ctx = canvas.getContext("2d")!;

    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, sourceWidth, sourceHeight);
      const maskData = createAlphaMask(imageData.data, sourceWidth);
      const d = new ImageData(maskData, sourceWidth, sourceHeight);
      ctx.putImageData(d, 0, 0);
      const data = canvas.toDataURL();
      localStorage.setItem(key, data);
      setMaskImage(data);
    };

    image.crossOrigin = "anonymous";
    image.src = url;
  }, [url, src]);

  return (
    <ChakraImage
      alt={title}
      src={url}
      width={sourceWidth}
      height={sourceHeight}
      sx={{
        maskImage: `url(${maskImage})`,
        maskSize: "100% 100%",
      }}
    />
  );
}
