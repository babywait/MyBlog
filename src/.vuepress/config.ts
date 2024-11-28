import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/MyBlog/",

  lang: "zh-CN",
  title: "Zhao Kai's Blog",
  description: "Zhao Kai's Blog",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
