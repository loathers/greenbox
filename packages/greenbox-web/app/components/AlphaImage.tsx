import { type SystemStyleObject } from "@chakra-ui/react";
import Color from "color";
import { useEffect, useMemo, useState } from "react";

import Image from "./Image.js";

function getEraserStartPoints(
  src: string,
  numberOfPixels: number,
  width: number,
) {
  const corners = [
    0,
    width * 4 - 8,
    numberOfPixels - width * 4,
    numberOfPixels - 8,
  ];
  switch (src) {
    case "itemimages/al_ant.gif":
      corners.push(2468, 908);
      break;
    case "itemimages/animskel.gif":
      corners.push(2816, 1872);
      break;
    case "itemimages/catburglar.gif":
      corners.push(808, 3180, 32);
      break;
    case "itemimages/crab.gif":
      corners.push(1148);
      break;
    case "itemimages/crayongoth.gif":
      corners.push(3308);
      break;
    case "itemimages/cuddlefish.gif":
      corners.push(2948);
      break;
    case "itemimages/familiar20.gif":
      corners.push(2344);
      break;
    case "itemimages/familiar33.gif":
      corners.push(1980);
      break;
    case "itemimages/familiar38.gif":
      corners.push(1980);
      break;
    case "itemimages/familiar39.gif":
      corners.push(52);
      break;
    case "itemimages/frankengnome.gif":
      corners.push(3544);
      break;
    case "itemimages/hatrack.gif":
      corners.push(444, 160, 3292);
      break;
    case "itemimages/hobosheep.gif":
      corners.push(3068);
      break;
    case "itemimages/kobold.gif":
      corners.push(3304);
      break;
    case "itemimages/medium_0.gif":
      corners.push(3184);
      break;
    case "itemimages/partymouse.gif":
      corners.push(3328, 1784);
      break;
    case "itemimages/roboreindeer.gif":
      corners.push(2928, 92);
      break;
    case "itemimages/shortchef.gif":
      corners.push(3424);
      break;
    case "itemimages/vampvint.gif":
      corners.push(2696);
      break;
    case "otherimages/sigils/bugbear.gif":
      corners.push(492);
      break;
    case "otherimages/sigils/c20cheer.gif":
      corners.push(6560);
      break;
    case "otherimages/sigils/chalktat.gif":
      corners.push(2940, 3936);
      break;
    case "otherimages/sigils/class11hc.gif":
      corners.push(4288);
      break;
    case "otherimages/sigils/class20hc.gif":
      corners.push(2712, 6888);
      break;
    case "otherimages/sigils/cliptat.gif":
      corners.push(2144, 7856);
      break;
    case "otherimages/sigils/debbietat.gif":
      corners.push(2636);
      break;
    case "otherimages/sigils/dvinntat.gif":
      corners.push(2256, 7056);
      break;
    case "otherimages/sigils/dvotat5.gif":
      corners.push(5484);
      break;
    case "otherimages/sigils/elbereth.gif":
      corners.push(2852, 2704, 1544, 7552, 7700, 1336, 7896);
      break;
    case "otherimages/sigils/elvtat.gif":
      corners.push(3904);
      break;
    case "otherimages/sigils/eternaltat.gif":
      corners.push(8308, 5904, 3504, 1100, 3852, 6260, 5076, 4728, 5548, 3544);
      break;
    case "otherimages/sigils/fibertat.gif":
      corners.push(7144, 3544);
      break;
    case "otherimages/sigils/frtat.gif":
      corners.push(5904);
      break;
    case "otherimages/sigils/gabtat.gif":
      corners.push(3940, 6736);
      break;
    case "otherimages/sigils/hippy.gif":
      corners.push(3468, 3544, 7540, 7480);
      break;
    case "otherimages/sigils/hothobotat.gif":
      corners.push(7104);
      break;
    case "otherimages/sigils/hourtat.gif":
      corners.push(4740, 4880);
      break;
    case "otherimages/sigils/mosstat.gif":
      corners.push(5368);
      break;
    case "otherimages/sigils/nobeer.gif":
      corners.push(5056, 4352, 7900, 1908);
      break;
    case "otherimages/sigils/nofood.gif":
      corners.push(5652, 2700, 3744);
      break;
    case "otherimages/sigils/nosealtat.gif":
      corners.push(3348, 7312, 1904, 5640);
      break;
    case "otherimages/sigils/oxy.gif":
      corners.push(5052, 4952);
      break;
    case "otherimages/sigils/para_tat.gif":
      corners.push(4556, 5292);
      break;
    case "otherimages/sigils/prealmtat.gif":
      corners.push(1724, 1876);
      break;
    case "otherimages/sigils/pressietat.gif":
      corners.push(2256, 1900);
      break;
    case "otherimages/sigils/sailortat.gif":
      corners.push(1308);
      break;
    case "otherimages/sigils/sgtat.gif":
      corners.push(7704, 1712);
      break;
    case "otherimages/sigils/skelepiratetat.gif":
      corners.push(9308, 6508);
      break;
    case "otherimages/sigils/slimetat.gif":
      corners.push(6940, 3476, 3336);
      break;
    case "otherimages/sigils/smoochtat.gif":
      corners.push(3120, 3084);
      break;
    case "otherimages/sigils/spqktat.gif":
      corners.push(1528, 4488);
      break;
    case "otherimages/sigils/sspdfi5if.gif":
      corners.push(3548);
      break;
    case "otherimages/sigils/tc_tat.gif":
      corners.push(5356, 5492);
      break;
    case "otherimages/sigils/vwgovttat.gif":
      corners.push(4080, 5108, 5136);
      break;
    case "otherimages/sigils/vwsnaketat.gif":
      corners.push(5912);
      break;
    case "otherimages/sigils/wickertat.gif":
      corners.push(6956);
      break;
    case "otherimages/sigils/workouttat.gif":
      corners.push(7840);
      break;
    case "otherimages/sigils/wreathtat.gif":
      corners.push(5504);
      break;
    case "otherimages/sigils/wroughttat.gif":
      corners.push(2716);
      break;
    case "otherimages/sigils/zaptat.gif":
      corners.push(6952, 7896);
      break;
    case "otherimages/sigils/zompirtat.gif":
      corners.push(6300);
      break;
    case "otherimages/trophy/anger_management_about_schmidt.gif":
      corners.push(5424);
      break;
    case "otherimages/trophy/angst_with_extra_cheese.gif":
      corners.push(17664, 18336);
      break;
    case "otherimages/trophy/big_head_todd.gif":
      corners.push(20860, 20744);
      break;
    case "otherimages/trophy/but_it_doesnt_love_me_back.gif":
      corners.push(14472, 15148);
      break;
    case "otherimages/trophy/cuppa_cuppa_burning_goo.gif":
      corners.push(24928, 25072);
      break;
    case "otherimages/trophy/garble_varble_zous.gif":
      corners.push(17652, 17968);
      break;
    case "otherimages/trophy/get_oot_eh.gif":
      corners.push(15552, 15660);
      break;
    case "otherimages/trophy/ghuolishly_good.gif":
      corners.push(15288, 15112);
      break;
    case "otherimages/trophy/haggis_is_as_haggis_does.gif":
      corners.push(15392);
      break;
    case "otherimages/trophy/i_had_to_drink_from_the_liquid_cup.gif":
      corners.push(17672, 15932);
      break;
    case "otherimages/trophy/ilovewesley.gif":
      corners.push(18060, 18752);
      break;
    case "otherimages/trophy/in_a_little_toy_shop.gif":
      corners.push(14864, 15540);
      break;
    case "otherimages/trophy/in_deep_end_ents.gif":
      corners.push(14084, 15520);
      break;
    case "otherimages/trophy/jeremiah_was_a_bullfrog.gif":
      corners.push(14864, 15948);
      break;
    case "otherimages/trophy/ladies_and_gentlemen.gif":
      corners.push(17656, 18344);
      break;
    case "otherimages/trophy/look_what_i_can_do.gif":
      corners.push(15944, 15268);
      break;
    case "otherimages/trophy/my_shrimps_was_dead_and_gone.gif":
      corners.push(17648, 19144);
      break;
    case "otherimages/trophy/no_well_ten_beers.gif":
      corners.push(15660, 15544);
      break;
    case "otherimages/trophy/not_wearing_any_pants.gif":
      corners.push(16064, 15148);
      break;
    case "otherimages/trophy/not_worth_the_wait.gif":
      corners.push(15660, 16352);
      break;
    case "otherimages/trophy/papier_i_hardly_know_her.gif":
      corners.push(9708, 7924, 25080);
      break;
    case "otherimages/trophy/run_over_by_grandma.gif":
      corners.push(15652, 15544);
      break;
    case "otherimages/trophy/the_dude_abides.gif":
      corners.push(16452, 17556);
      break;
    case "otherimages/trophy/the_nastiest_cocktail.gif":
      corners.push(15264, 15948);
      break;
    case "otherimages/trophy/this_this_lemonade.gif":
      corners.push(12280);
      break;
    case "otherimages/trophy/yule_be_happy.gif":
      corners.push(23408, 15848);
      break;
    case "itemimages/movfeast.gif":
      corners.push(2816);
      break;
    case "itemimages/sanehatrack.gif":
      corners.push(288, 440, 3288);
      break;
    case "itemimages/medium_small.gif":
      corners.push(3180);
      break;
    case "itemimages/acuteangel.gif":
      corners.push(3416);
      break;
    case "itemimages/buddybjorn.gif":
      corners.push(2196, 1044);
      break;
    case "itemimages/odetobooze.gif":
      corners.push(1900);
      break;
    case "itemimages/prelude.gif":
      corners.push(2328);
      break;
    case "itemimages/garbagenova.gif":
      corners.push(1860);
      break;
  }
  return corners;
}

function createAlphaMask(
  data: Uint8ClampedArray,
  width: number,
  startingPoints: number[],
) {
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
  startingPoints.forEach(eraser);

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
      const startingPoints = getEraserStartPoints(
        src,
        imageData.data.length,
        sourceWidth,
      );
      const maskData = createAlphaMask(
        imageData.data,
        sourceWidth,
        startingPoints,
      );
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
