import { useEffect, useRef } from "react";

function floodErase(data: Uint8ClampedArray) {
  const visited = new Set();

  function eraser(i: number) {
    // Don't revist or go out of bounds
    if (i < 0 || i >= data.length || visited.has(i)) return;
    visited.add(i);

    // If not white, stop here
    if (data[i] + data[i + 1] + data[i + 2] < 765) {
      return;
    }

    // Set this pixel to transparent
    data[i + 3] = 0;

    // And visit neighbours
    eraser(i - 120); // Visit top
    eraser(i + 4); // Visit right
    eraser(i + 120); // Visit bottom
    eraser(i - 4); // Visit left
  }

  // Start an erase process from each corner
  eraser(0);
  eraser(112);
  eraser(data.length - 120);
  eraser(data.length - 8);
}

type Props = {
  src: string;
};

export default function AlphaImage({ src }: Props) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (!ctx) return;

    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      const imageData = ctx.getImageData(0, 0, 30, 30);
      floodErase(imageData.data);
      ctx.putImageData(imageData, 0, 0);
    };
    image.crossOrigin = "anonymous";
    image.src = src;
  }, [canvas.current, src]);

  return <canvas ref={canvas} width={30} height={30} />;
}
