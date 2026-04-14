import hanoiSpring1v from "/hanoi_spring_1.jpg";
import hanoiSpring2v from "/hanoi_spring_2.jpg";
import hanoiSpring3v from "/hanoi_spring_3.jpg";
import hanoiSummer1v from "/hanoi_summer_1.jpg";
import hanoiSummer2v from "/hanoi_summer_2.jpg";
import hanoiSummer3v from "/hanoi_summer_3.jpg";
import hanoiAutumn1v from "/hanoi_autumn_1.jpg";
import hanoiAutumn2v from "/hanoi_autumn_2.jpg";
import hanoiAutumn3v from "/hanoi_autumn_3.jpg";
import hanoiWinter1v from "/hanoi_winter_1.jpg";
import hanoiWinter2v from "/hanoi_winter_2.jpg";
import hanoiWinter3v from "/hanoi_winter_3.jpg";

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
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    {
      src: hanoiSpring2v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    {
      src: hanoiSpring3v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
  ],
  Summer: [
    {
      src: hanoiSummer1v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    {
      src: hanoiSummer2v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    {
      src: hanoiSummer3v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
  ],
  Autumn: [
    {
      src: hanoiAutumn1v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    {
      src: hanoiAutumn2v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    {
      src: hanoiAutumn3v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
  ],
  Winter: [
    {
      src: hanoiWinter1v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    {
      src: hanoiWinter2v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
    {
      src: hanoiWinter3v,
      offsetX: 0,
      offsetY: 0,
      rotate: 0,
    },
  ],
};
