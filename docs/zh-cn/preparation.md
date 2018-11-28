## 站点准备

在成功安装完`docsite`之后，进入项目根目录，执行`docsite init`，生成的目录如下结构：

```js
.
├── .babelrc
├── .docsite
├── .eslintrc
├── .gitignore
├── .nojekyll
├── blog
│   ├── en-us
│   └── zh-cn
├── docs
│   ├── en-us
│   │   ├── dir
│   │   └── img
│   └── zh-cn
│       ├── dir
│       └── img
├── docsite.config.yml
├── gulpfile.js
├── img
│   ├── dubbo.ico
│   └── system
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
│   │   ├── button
│   │   ├── footer
│   │   ├── header
│   │   ├── language
│   │   ├── pageSlider
│   │   ├── sidemenu
│   │   └── slider
│   ├── markdown.scss
│   ├── pages
│   │   ├── blog
│   │   ├── blogDetail
│   │   ├── community
│   │   ├── documentation
│   │   └── home
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

### docsite.config.yml

放置非markdown文件对应页面的SEO配置信息（1.3.3版本添加）

### .nojekyll

用于跳过jekyll的检查

### src
存放源码的位置，其中，`markdown.scss`为markdown文档的样式文件，`variable.scss`为一些公共scss变量，`components`为公共组件，`pages`为对应站点的不同页面，`utils中`存放一些公共方法。

现在网站的骨架搭建完成，可以进行网站的自定义和内容填充了。