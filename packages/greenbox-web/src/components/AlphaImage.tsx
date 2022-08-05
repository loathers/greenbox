import Color from "color";
import { useEffect, useRef, useState } from "react";

import Spinner from "./Spinner";

function floodErase(data: Uint8ClampedArray, width: number) {
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

    // Set this pixel to transparent
    data[i + 3] = 0;

    // And visit neighbours
    try {
      [i - width * 4, i + 4, i + width * 4, i - 4].filter(valid).forEach(eraser);
    } catch (e) {
      return;
    }
  }

  // Start an erase process from each corner
  [0, width * 4 - 8, data.length - width * 4, data.length - 8].forEach(eraser);
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
  const canvas = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, sourceWidth, sourceHeight);
      floodErase(imageData.data, sourceWidth);
      ctx.putImageData(imageData, 0, 0);
      setLoading(false);
    };
    image.crossOrigin = "anonymous";
    image.src = `https://s3.amazonaws.com/images.kingdomofloathing.com/${src}`;
  }, [canvas.current, src]);

  return (
    <>
      {loading && <Spinner />}
      <canvas
        title={title}
        style={{ display: loading ? "none" : "block" }}
        ref={canvas}
        width={sourceWidth}
        height={sourceHeight}
      />
    </>
  );
}
