## 创建站点

> 在做好前面的准备工作后，现在可以着手定义属于你自己的站点了。

在项目根目录下执行docsite start命令，会在浏览器中自动打开页面。

初始化生成的模板工程默认集成了首页、文档页、博客列表页、博客详情页、社区页及中英文国际化功能。可以按照需求自行添加和删除页面。

### 添加文档

1. 将对应的`.md`或者`.markdown`文件放进`docs`文件夹下的对应语言目录中，支持多级目录
2. 在`site_config`文件夹下的`docs.js`中配置文档的菜单项

### 添加博客

1. 将对应的`.md`或者`.markdown`文件放进`blog`文件夹下的对应语言目录中，支持多级目录存放
2. 在`site_config`文件夹下的`blog.js`中配置博客的列表项

**注：**

markdown文件均支持在文档顶部自定义元数据，顶部的`---`（至少三个`-`）之间的数据会被认为是元数据，一个key占用一行。目前支持`title`、`keywords`、`description`三个字段，在生成静态HTML时，分别作为页面标签的标题、页面关键字、页面描述，便于搜索引擎更好地收录站点，从而利于SEO。

```js
---
title: title
keywords: keywords1,keywords2,keywords3
description: some description
---

your markdown content
```