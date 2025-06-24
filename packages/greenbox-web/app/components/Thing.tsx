import { Box, LinkBox, LinkOverlay, useToken } from "@chakra-ui/react";
import he from "he";
import { forwardRef, useEffect, useState } from "react";

import { useAppSelector } from "../hooks.js";

import AlphaImage from "./AlphaImage.js";

export type StateType = "complete" | "partial" | null | undefined;

type Props = {
  type: "skill" | "familiar" | "trophy" | "tattoo" | "item";
  state?: StateType;
  name: string;
  image: string | React.ReactNode;
  title?: string;
  sourceWidth?: number;
  badges?: React.ReactNode;
  link?: string;
};

function styleFromStatus(state: StateType, bg: string) {
  switch (state) {
    case "complete": {
      return { backgroundColor: "complete" };
    }
    case "partial": {
      return {
        backgroundColor: "partial",
        backgroundImage: `repeating-linear-gradient(45deg, ${bg} 25%, transparent 25%, transparent 75%, ${bg} 75%, ${bg}), repeating-linear-gradient(45deg, ${bg} 25%, transparent 25%, transparent 75%, ${bg} 75%, ${bg})`,
        backgroundPosition: "0 0, 5px 5px",
        backgroundSize: "10px 10px",
      };
    }
    default: {
      return {
        backgroundColor: bg,
      };
    }
  }
}

export default forwardRef<HTMLDivElement, Props>(function Thing(
  {
    type,
    state: status,
    name,
    image,
    badges = null,
    sourceWidth = 30,
    title = `${name} (${status || "do not have"})`,
    link,
    ...rest
  },
  ref,
) {
  const [bg] = useToken("colors", ["accent"]);
  const [eraserTags, setEraserTags] = useState<number[]>([]);
  const style = styleFromStatus(status, bg);

  const wikiLink = link || ""; // @todo use context

  useEffect(() => {
    const handle = (event: KeyboardEvent) => {
      if (event.key !== "Shift") return;
      if (event.type === "keydown") {
        setEraserTags([]);
      }
      if (event.type === "keyup") {
        if (!eraserTags.length) return;
        console.log(
          `case "${image}": corners.push(${eraserTags.join(", ")}); break;`,
        );
      }
    };

    window.addEventListener("keydown", handle);
    window.addEventListener("keyup", handle);
    return () => {
      window.removeEventListener("keydown", handle);
      window.removeEventListener("keyup", handle);
    };
  }, [eraserTags, image]);

  return (
    <LinkBox
      ref={ref}
      borderWidth={1}
      borderStyle="solid"
      borderColor="black"
      p={1}
      {...style}
      title={title}
      position="relative"
      overflow="hidden"
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      _hover={{
        filter: style.backgroundColor ? "brightness(90%)" : undefined,
        backgroundColor: style.backgroundColor || "blackAlpha.50",
      }}
      onClick={(event) => {
        if (!event.shiftKey) return;
        const img = event.currentTarget
          .querySelector("img")
          ?.getBoundingClientRect();
        if (!img) return;
        event.preventDefault();
        localStorage.removeItem(`alphamask-${image}`);
        const x = Math.floor(event.clientX - img.left);
        const y = Math.floor(event.clientY - img.top);
        setEraserTags([...eraserTags, (y * img.width + x) * 4]);
        return false;
      }}
      {...rest}
    >
      {badges && (
        <Box position="absolute" css={{ top: 0, right: 0 }}>
          {badges}
        </Box>
      )}
      {typeof image === "string" ? (
        <AlphaImage src={image} sourceWidth={sourceWidth} />
      ) : (
        image
      )}
      <LinkOverlay
        textAlign="center"
        fontSize="10px"
        href={`https://kol.coldfront.net/thekolwiki/index.php/${wikiLink}`}
      >
        {he.decode(name)}
      </LinkOverlay>
    </LinkBox>
  );
});
