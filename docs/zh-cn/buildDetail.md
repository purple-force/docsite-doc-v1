---
title: 构建细节
---

## 构建细节

本篇简单介绍下docsite的构建细节，便于更好的理解和使用docsite。

### md文档构建

除了基本的md文本内容，docsite还支持`title`，`keywords`，`description`三个元数据。

在本地开发时，当新增、修改、删除md文档时，会在对应目录中生成对应的json文件，比如`/blog/zh-cn/demo.md`文档中内容如下：

```
---
title: demo title
keywords: keywords1,keywords2,keywords3
description: some description
---

## the title
```
则会在`/zh-cn/blog/`下生成一个`demo.json`文件，内容如下：

```json
{
  "title": "title",
  "keywords": "keywords1,keywords2,keywords3",
  "description": "some description",
  "__html": "<h2>the title</h2>",
  "filename": "demo.md",
}
```

### js、css构建

docsite会对`pages`目录下的一级文件夹中的`index.jsx`和`index.scss`文件作构建，在`build`目录生成对应的js和css文件，文件名为文件夹的名称。比如某个页面为`pages/custom/index.jsx`，`pages/custom/index.scss`，那么会在`build`目录中生成`custom.js`和`custom.css`文件。

### html构建

html构建主要生成两类页面，一个是功能性页面，一个是站点页面。

+ 功能页面

docsite会根据`redirect.ejs`在根目录下生成一个`index.html`文件，用作访问根目录时的跳转。还会生成一个`404.html`，用于某些静态站点托管平台的自定义404页面的功能。当用户访问一个不存在的页面时，平台会将用户导向`404.html`，进而跳转到正常的页面。

+ 站点页面

对于站点页面，docsite依据`template.ejs`生成HTML页面，页面中引入合适的静态资源。主要分为首页、md页和其他页面三种类型，现分别作说明：

1. 首页

docsite将`src/pages/home`文件夹下的`index.jsx`转换为`index.html`文件，放置在`zh-cn`和`en-us`目录下。

2. md页

文档页中，结合`docs/zh-cn`（或`docs/en-us`）中的md文档和`src/pages/documentation`，转换成对应的HTML文件。比如某个文档为`docs/zh-cn/demo.md`，则会生成`zh-cn/docs/demo.html`。

博客详情页中，结合`blog/zh-cn`（或`blog/en-us`）中的md文档和`src/pages/blogDetail`，转换成对应的HTML文件。比如某个博客为`blog/en-us/demo.md`，则会生成`en-us/blog/demo.html`。

3. 其他页面

比如某个页面的jsx代码位置为`src/pages/demo/index.jsx`，则会生成`zh-cn/demo/index.html`和`en-us/demo/index.html`。