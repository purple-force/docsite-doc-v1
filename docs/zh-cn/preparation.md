## 站点准备

在成功安装完`docsite`之后，进入项目根目录，执行`docsite init`，生成的目录如下结构：

```js
.
├── .babelrc
├── .docsite
├── .eslintrc
├── .gitignore
├── README.md
├── blog
│   ├── en-us
│   │   ├── blog1.md
│   │   ├── blog2.md
│   │   ├── blog3.md
│   │   ├── blog4.md
│   │   ├── blog5.md
│   │   ├── blog6.md
│   │   └── blog7.md
│   └── zh-cn
│       ├── blog1.md
│       ├── blog2.md
│       ├── blog3.md
│       ├── blog4.md
│       ├── blog5.md
│       ├── blog6.md
│       └── blog7.md
├── docs
│   ├── en-us
│   │   ├── demo1.md
│   │   ├── demo2.md
│   │   ├── dir
│   │   │   └── demo3.md
│   │   └── img
│   │       └── brhtqqzh.jpeg
│   └── zh-cn
│       ├── demo1.md
│       ├── demo2.md
│       ├── dir
│       │   └── demo3.md
│       └── img
│           └── brhtqqzh.jpeg
├── gulpfile.js
├── img
│   ├── alibaba.png
│   ├── alibaba_hover.png
│   ├── architecture.png
│   ├── brhtqqzh.jpeg
│   ├── documents.png
│   ├── dubbo.ico
│   ├── dubbo_colorful.png
│   ├── dubbo_gray.png
│   ├── dubbo_white.png
│   ├── feature_hogh.png
│   ├── feature_loadbalances.png
│   ├── feature_maintenance.png
│   ├── feature_runtime.png
│   ├── feature_service.png
│   ├── feature_transpart.png
│   ├── issue.png
│   ├── mailinglist.png
│   ├── mailinglist_hover.png
│   ├── pullrequest.png
│   ├── quick_start.png
│   ├── segmentfault.png
│   ├── segmentfault_hover.png
│   ├── system
│   │   ├── arrow_down.png
│   │   ├── arrow_right.png
│   │   ├── blog.png
│   │   ├── community.png
│   │   ├── docs.png
│   │   ├── docs_hover.png
│   │   ├── docs_normal.png
│   │   ├── menu_gray.png
│   │   ├── menu_white.png
│   │   ├── next.png
│   │   └── prev.png
│   ├── users_alibaba.png
│   ├── weibo.png
│   └── weibo_hover.png
├── package-lock.json
├── package.json
├── redirect.ejs
├── site_config
│   ├── blog.js
│   ├── community.jsx
│   ├── docs.js
│   ├── home.jsx
│   └── site.js
├── src
│   ├── components
│   │   ├── bar
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── button
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── footer
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── header
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── language
│   │   │   └── index.jsx
│   │   ├── pageSlider
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── sidemenu
│   │   │   ├── index.jsx
│   │   │   ├── index.scss
│   │   │   └── item.jsx
│   │   └── slider
│   │       ├── index.jsx
│   │       └── index.scss
│   ├── markdown.scss
│   ├── pages
│   │   ├── blog
│   │   │   ├── blogItem.jsx
│   │   │   ├── blogItem.scss
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── blogDetail
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── community
│   │   │   ├── contactItem.jsx
│   │   │   ├── contributorItem.jsx
│   │   │   ├── ecoItem.jsx
│   │   │   ├── eventCard.jsx
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   ├── documentation
│   │   │   ├── index.jsx
│   │   │   └── index.scss
│   │   └── home
│   │       ├── featureItem.jsx
│   │       ├── index.jsx
│   │       └── index.scss
│   ├── reset.scss
│   └── variables.scss
├── template.ejs
├── utils
│   └── index.js
└── webpack.config.js

```

现从上至下对主要的文件、文件夹作说明。

### .docsite

空文件，用作判断当前项目是否已初始化过。

### template.ejs

所有生成的HTML页面的模板，修改对所有页面（除重定向页面）生效。

### redirect.ejs

重定向页面模板，可在其中配置重定向逻辑。默认会根据这个模板在项目根目录下生成`index.html`和`404.html`（用于某些静态托管站点的自定义404页面的功能）。

### blog

存放博客的markdown文档及相关图片资源的目录，分为中、英文两个目录。

### docs

存放说明文档的markdown文档及相关图片资源的目录，分为中、英文两个目录。

### img

存放非markdown使用的一些站点的图片，其中system中存放一些业务无关的图片。

### site_config

存放整个站点的中英文配置数据，其中`site.js`配置全局的一些数据，包括本地开发启动的服务器端口（默认为8080）、部署到服务器的根目录（需以`/`开头但不能有尾`/`，如果只有`/`，请填写空字符串）、站点默认显示的语言版本、顶部的菜单栏和底部的页脚部分。`home.jsx`、`docs.js`、`blog.js`、`community.jsx`分别对应首页、文档页、博客列表页、社区页的配置。

### src
存放源码的位置，其中，`markdown.scss`为markdown文档的样式文件，`variable.scss`为一些公共scss变量，`components`为公共组件，`pages`为对应站点的不同页面，`utils中`存放一些公共方法。

现在网站的骨架搭建完成，可以进行网站的自定义和内容填充了。