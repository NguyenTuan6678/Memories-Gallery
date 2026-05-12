import { summerEN } from "../contents/summer/en";
import { summerVI } from "../contents/summer/vi";

import { autumnEN } from "../contents/autumn/en";
import { autumnVI } from "../contents/autumn/vi";

import { winterEN } from "../contents/winter/en";
import { winterVI } from "../contents/winter/vi";

import { springEN } from "../contents/spring/en";
import { springVI } from "../contents/spring/vi";

export const SEASON_PAGE_CONFIG = {
  Spring: {
    titleEN: "Hanoi in Spring",
    titleVI: "Hà Nội Mùa Xuân",

    subtitleEN: "Hanoi • February – April",
    subtitleVI: "Hà Nội • Tháng 2 – Tháng 4",

    heroDescriptionEN:
      "Both gentle and serene, yet vibrant with life — a guide to fully experiencing the charm of the capital during the first days of the year.",

    heroDescriptionVI:
      "Vừa dịu dàng vừa đầy sức sống — hành trình khám phá vẻ đẹp của thủ đô trong những ngày đầu năm.",

    leftIcon: "🌸",
    rightIcon: "☁️",

    gradient: "linear-gradient(135deg, #e8f0e5 0%, #f5ede3 50%, #e9eff5 100%)",

    en: springEN,
    vi: springVI,
  },

  Summer: {
    titleEN: "Hanoi in Summer",
    titleVI: "Hà Nội Mùa Hạ",

    subtitleEN: "Hanoi • May – July",
    subtitleVI: "Hà Nội • Tháng 5 – Tháng 7",

    heroDescriptionEN:
      "Golden sunlight, sudden rain, and streets filled with the scent of blooming lotus.",

    heroDescriptionVI:
      "Nắng vàng, những cơn mưa bất chợt và hương sen lan khắp phố phường.",

    leftIcon: "🌿",
    rightIcon: "☀️",

    gradient: "linear-gradient(135deg, #fff0b8 0%, #f7d794 50%, #dff9fb 100%)",

    en: summerEN,
    vi: summerVI,
  },

  Autumn: {
    titleEN: "Hanoi in Autumn",
    titleVI: "Hà Nội Mùa Thu",

    subtitleEN: "Hanoi • August – October",
    subtitleVI: "Hà Nội • Tháng 8 – Tháng 10",

    heroDescriptionEN:
      "Cool breeze, golden leaves, and the nostalgic beauty of Hanoi’s most beloved season.",

    heroDescriptionVI:
      "Gió heo may, lá vàng và vẻ đẹp hoài niệm của mùa được yêu thích nhất Hà Nội.",

    leftIcon: "🍂",
    rightIcon: "🕊️",

    gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 50%, #fbc2eb 100%)",

    en: autumnEN,
    vi: autumnVI,
  },

  Winter: {
    titleEN: "Hanoi in Winter",
    titleVI: "Hà Nội Mùa Đông",

    subtitleEN: "Hanoi • November – January",
    subtitleVI: "Hà Nội • Tháng 11 – Tháng 1",

    heroDescriptionEN:
      "Cold air, quiet streets, and warm lights glowing through the misty nights.",

    heroDescriptionVI:
      "Không khí se lạnh, phố phường yên tĩnh và ánh đèn ấm áp giữa màn sương đêm.",

    leftIcon: "❄️",
    rightIcon: "🌙",

    gradient: "linear-gradient(135deg, #dfe9f3 0%, #ffffff 50%, #cfd9df 100%)",

    en: winterEN,
    vi: winterVI,
  },
} as const;
