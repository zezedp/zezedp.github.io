	import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "b1lb0's crypto blog",
  subTitle: "",
 brandTitle: "b1lb0",

  description: "b1lb0's cryptography blog",

  site: "https://zezedp.github.io",

  locale: "br", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/zezedp/",
    },
  ],

  username: "b1lb0",
  sign: "just a CS major interested in cryptography.",
  avatarUrl: "/dist/docs/manny.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/zezedp",
    },
    {
      icon: "mingcute:youtube-line",
      link: "https://youtube.com/@guilhermecappelli6411",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
  ],

  slugMode: "HASH",// 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP function
  bannerStyle:"LOOP" // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
