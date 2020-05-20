// 全局的一些配置
export default {
  rootPath: '', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'docsite.js.org', // 站点部署域名，无需协议和path等
  defaultSearch: 'google', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home',
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/installation.html',
      },
    ],
    disclaimer: {
      title: 'DocSite',
      content: 'Docsite is a solution for building a static open source site official website with document,blog and community. It is easy to use. Meanwhile, it supports react and static rendering, PC and mobile terminals, internationalization of Chinese and English, SEO, markdown document, global site search, site style customization, page customization and other features. With docsite, you can build static open source sites easily',
    },
    documentation: {
      title: 'Docs',
      list: [
        {
          text: 'Quick Start',
          link: '/en-us/docs/install.html',
        },
        {
          text: 'Developer Guide',
          link: '/en-us/docs/commandLine.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'GitHub',
          link: 'https://github.com/txd-team/docsite',
        },
        {
          text: 'npm',
          link: 'https://www.npmjs.com/package/docsite',
        },
        {
          text: 'AT',
          link: 'https://design.teambition.com/',
        },
      ],
    },
    copyright: 'Copyright@ 2020 TXD',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '文档',
        link: '/zh-cn/docs/installation.html',
      },
    ],
    disclaimer: {
      title: 'DocSite',
      content: 'DocSite是一款集官网、文档、博客和社区为一体的静态开源站点的解决方案，具有简单易上手、上手不撒手的特质，同时支持react和静态渲染、PC端和移动端、支持中英文国际化、SEO、markdown文档、全局站点搜索、站点风格自定义、页面自定义等功能，借助DocSite，可以极大的提高搭建静态开源站点的效率',
    },
    documentation: {
      title: '文档',
      list: [
        {
          text: '快速开始',
          link: '/zh-cn/docs/install.html',
        },
        {
          text: '开发者指南',
          link: '/zh-cn/docs/commandLine.html',
        },
      ],
    },
    resources: {
      title: '相关资源',
      list: [
        {
          text: 'GitHub',
          link: 'https://github.com/txd-team/docsite',
        },
        {
          text: 'npm',
          link: 'https://www.npmjs.com/package/docsite',
        },
        {
          text: 'AT',
          link: 'https://design.teambition.com/',
        },
      ],
    },
    copyright: 'Copyright@ 2020 TXD',
  }
};
