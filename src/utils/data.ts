import hanoiSpring1v from "/hanoi_spring_1_crop.jpg";
import hanoiSpring2v from "/hanoi_spring_2_crop.jpg";
import hanoiSpring3v from "/hanoi_spring_3_crop.jpg";
import hanoiSummer1v from "/hanoi_summer_1_crop.jpg";
import hanoiSummer2v from "/hanoi_summer_2_crop.jpg";
import hanoiSummer3v from "/hanoi_summer_3_crop.jpg";
import hanoiAutumn1v from "/hanoi_autumn_1_crop.jpg";
import hanoiAutumn2v from "/hanoi_autumn_2_crop.jpg";
import hanoiAutumn3v from "/hanoi_autumn_3_crop.jpg";
import hanoiWinter1v from "/hanoi_winter_1_crop.jpg";
import hanoiWinter2v from "/hanoi_winter_2_crop.jpg";
import hanoiWinter3v from "/hanoi_winter_3_crop.jpg";

export type HanoiSceneEntry = {
  src: string;
  offsetX: number;
  offsetY: number;
  rotate: number;
};

import type { ImageId } from "./types";

export const hanoiScenes: Record<ImageId, HanoiSceneEntry[]> = {
  Spring: [
    {
      src: hanoiSpring1v,
      offsetX: -460,
      offsetY: -190,
      rotate: -8,
    },
    {
      src: hanoiSpring2v,
      offsetX: -10,
      offsetY: -300,
      rotate: 2,
    },
    {
      src: hanoiSpring3v,
      offsetX: 430,
      offsetY: -100,
      rotate: -4,
    },
  ],
  Summer: [
    {
      src: hanoiSummer1v,
      offsetX: -500,
      offsetY: -100,
      rotate: 3,
    },
    {
      src: hanoiSummer2v,
      offsetX: -10,
      offsetY: -270,
      rotate: -4,
    },
    {
      src: hanoiSummer3v,
      offsetX: 400,
      offsetY: -70,
      rotate: -2,
    },
  ],
  Autumn: [
    {
      src: hanoiAutumn1v,
      offsetX: -420,
      offsetY: -110,
      rotate: -5,
    },
    {
      src: hanoiAutumn2v,
      offsetX: 50,
      offsetY: -200,
      rotate: 4,
    },
    {
      src: hanoiAutumn3v,
      offsetX: 450,
      offsetY: 20,
      rotate: 10,
    },
  ],
  Winter: [
    {
      src: hanoiWinter1v,
      offsetX: -500,
      offsetY: -10,
      rotate: -5,
    },
    {
      src: hanoiWinter2v,
      offsetX: -10,
      offsetY: -100,
      rotate: 3,
    },
    {
      src: hanoiWinter3v,
      offsetX: 370,
      offsetY: 200,
      rotate: -7,
    },
  ],
};
