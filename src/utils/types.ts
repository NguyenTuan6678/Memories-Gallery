export type MousePosition = {
  x: number;
  y: number;
};

export const imageIds = ["Spring", "Summer", "Autumn", "Winter"] as const;

export type ImageId = (typeof imageIds)[number];

export type ImageTitle = {
  id: ImageId;
  displayName: string;
};
