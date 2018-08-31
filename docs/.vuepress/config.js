const utils = require("./utils")

module.exports = {
  title: "awesome-fe",
  description: "前端知识梳理",
  base: "/awesome-fe/",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/"
      },
      {
        text: "网站",
        link: "/site/"
      },
      {
        text: "文章",
        link: "/article/"
      },
      {
        text: "面试",
        link: "/interview/"
      },
      {
        text: "Vue",
        link: "/vue/"
      },
      {
        text: "React",
        link: "/react/"
      },
      {
        text: "Blog",
        link: "/blog/"
      }
    ],
    sidebar: utils.inferSiderbars(),
    lastUpdated: "上次更新",
    repo: "Aaronwn/awesome-fe",
    editLinks: true,
    docsDir: "docs",
    editLinkText: "在 GitHub 上编辑此页",
    sidebarDepth: 3
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@public": "./public"
      }
    }
  },
  ga: "UA-109340118-1",
  markdown: {
    config: md => {
      // use more markdown-it plugins!
      md.use(require("markdown-it-include"))
    }
  }
}
