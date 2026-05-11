export type MousePosition = {
  x: number;
  y: number;
};

export const imageIds = ["Spring", "Summer", "Autumn", "Winter"] as const;

export type ImageId = (typeof imageIds)[number];

export type ImageTitle = {
  id: ImageId;

  en: string;

  vi: string;
};

export const imageTitles: ImageTitle[] = [
  {
    id: "Spring",
    en: "Spring",
    vi: "Mùa Xuân",
  },

  {
    id: "Summer",
    en: "Summer",
    vi: "Mùa Hạ",
  },

  {
    id: "Autumn",
    en: "Autumn",
    vi: "Mùa Thu",
  },

  {
    id: "Winter",
    en: "Winter",
    vi: "Mùa Đông",
  },
];
