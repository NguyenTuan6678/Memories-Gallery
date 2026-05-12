import type { ImageId } from "./types";

export interface SectionItem {
  heading: string;
  body: string;
}

export interface Section {
  icon: string;
  tag: string;
  title: string;
  intro: string;

  splashA: string;
  splashB: string;

  image?: string;
  items: SectionItem[];
}

export const SEASON_COLORS: Record<
  ImageId,
  { default: string; hover: string }
> = {
  Spring: { default: "#c8d8c0", hover: "#7a9468" },
  Summer: { default: "#d8c8a0", hover: "#c4873a" },
  Autumn: { default: "#d8b8a0", hover: "#b85c38" },
  Winter: { default: "#a8b8c8", hover: "#4a7a9e" },
};
