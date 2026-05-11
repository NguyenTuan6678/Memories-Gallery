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

  items: SectionItem[];
}
