import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Yukina",
  subTitle: "Yukina Template Demo Site",
  brandTitle: "Yukina",

  description: "Demo Site",

  site: "https://yukina-blog.vercel.app",

  locale: "en", // set for website language and date format

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
      href: "https://github.com/WhitePaper233/yukina",
    },
  ],

  username: "WhitePaper 白芷",
  sign: "Ad Astra Per Aspera.",
  avatarUrl: "https://s2.loli.net/2025/01/25/FPpTrQSezM8ivbl.webp",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/WhitePaper233",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/22433608",
    },
    {
      icon: "mingcute:netease-music-line",
      link: "https://music.163.com/#/user/home?id=125291648",
    },
  ],

  banners: [
    "https://s2.loli.net/2024/11/23/DIGYWarlfgN4Fnq.webp",
    "https://s2.loli.net/2024/11/23/TlyqvFUjBxbWsDQ.webp",
    "https://s2.loli.net/2024/08/20/5fszgXeOxmL3Wdv.webp",
    "https://s2.loli.net/2024/12/06/uL4YUptnKlPxbaZ.webp",
    "https://s2.loli.net/2024/12/06/tjG9RkSoiDgF7CA.webp",
    "https://s2.loli.net/2024/12/06/ntIKl6Lkg3Ta5DF.webp",
    "https://s2.loli.net/2024/12/06/se2tHfcVqPmzi6F.webp",
    "https://s2.loli.net/2024/12/06/kKjCBuebX4OUlgw.webp",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;
