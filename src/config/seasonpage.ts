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

    heroBandTitleEN: "Whispers of Spring",
    heroBandTitleVI: "Lời Thì Thầm Mùa Xuân",

    heroDescriptionEN: "Rain-kissed streets and blooming silence",
    heroDescriptionVI: "Phố ướt mưa và những khoảng lặng nở hoa",

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

    heroBandTitleEN: "Under the Amber Sun",
    heroBandTitleVI: "Dưới Nắng Hổ Phách",

    heroDescriptionEN: "Heat, lotus scent, and passing showers",
    heroDescriptionVI: "Nắng nóng, hương sen và những cơn mưa ngang qua",

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

    heroBandTitleEN: "A Season Remembered",
    heroBandTitleVI: "Mùa Của Những Hoài Niệm",

    heroDescriptionEN: "Golden air, soft winds, and old memories",
    heroDescriptionVI: "Không khí vàng, gió nhẹ và những ký ức cũ",

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

    heroBandTitleEN: "Stillness After Dusk",
    heroBandTitleVI: "Tĩnh Lặng Sau Hoàng Hôn",

    heroDescriptionEN: "Cold mornings and warm windows",
    heroDescriptionVI: "Sáng lạnh và những ô cửa ấm đèn",

    leftIcon: "❄️",
    rightIcon: "🌙",

    gradient: "linear-gradient(135deg, #dfe9f3 0%, #ffffff 50%, #cfd9df 100%)",

    en: winterEN,
    vi: winterVI,
  },
} as const;
