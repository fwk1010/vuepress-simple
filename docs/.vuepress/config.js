module.exports = {
  title: "VuePress",
  description: "descripion",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      {
        text: "Languages",
        items: [
          { text: "Chinese", link: "/language/chinese" },
          { text: "Japanese", link: "/language/japanese" }
        ]
      }
    ],
    sidebar: ["/", "/page1", ["/page2", "page2"]]
  }
};
