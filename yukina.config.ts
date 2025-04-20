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
  avatarUrl: "https://i.pinimg.com/736x/5a/d8/72/5ad872eeca3e987f9325649e2d2524a1.jpg",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/zezedp",
    },
    {
      icon: "mingcute:youtube-line",
      link: "https://youtube.com/@guilhermecappelli6411",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com/#/user/home?id=125291648",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
     "https://external-preview.redd.it/microdata-refinement-severance-v0-eWI2dzZ0M2Qyd2ZlMfGK8pkum0_zjJqIqVL1ZCiDTPIMqiOlqT6jhydKojNM.png?format=pjpg&auto=webp&s=f8cf3a81bd5c0b078b38244e0808e6d68ebfae40",
"https://external-preview.redd.it/microdata-refinement-severance-v0-eWI2dzZ0M2Qyd2ZlMfGK8pkum0_zjJqIqVL1ZCiDTPIMqiOlqT6jhydKojNM.png?format=pjpg&auto=webp&s=f8cf3a81bd5c0b078b38244e0808e6d68ebfae40",
  ],

  slugMode: "RAW",// 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP function
  bannerStyle: "LOOP" // 'loop' | 'static' | 'hidden'
};


export default YukinaConfig;
