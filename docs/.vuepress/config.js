

module.exports = {
  locales: {
    "/": {
        lang: "zh-CN",
        title: "VuePress 1.x",
        description: "Vue 驱动的静态网站生成器"
      },
    "/en-US/": {
      lang: "en-US",
      title: "VuePress 1.x",
      description: "Vue-powered Static Site Generator"
    },
   
  },
  themeConfig: {
    nav: [{ text: "Home", link: "/" }, { text: "About", link: "/about/" }],
    sidebar: ["/", "/page1", ["/page2", "page2"]]
  }
};
