---
title: Building details
---

## Building details

This article briefly introduces the build details of docsite to facilitate a better understanding and use of docsite.

### Md document build

In addition to the basic md content, docsite also supports three metadatas, `title`, `keywords`, `description` .

In development, when adding, modifying, or deleting the md document, the corresponding json file will be generated in the corresponding directory. For example, the contents of the `/blog/zh-cn/demo.md` document are as follows:

```
---
title: demo title
keywords: keywords1,keywords2,keywords3
description: some description
---

## the title
```
A `demo.json` file will be generated in `/zh-cn/blog/`, as follows:

```json
{
  "title": "title",
  "keywords": "keywords1,keywords2,keywords3",
  "description": "some description",
  "__html": "<h2>the title</h2>",
  "filename": "demo.md",
}
```

### Js, css build

Docsite will build the `index.jsx` and `index.scss` files in the first-level folder under the `pages` directory, and generate the corresponding js and css files in the `build` directory. The file name is the name of the folder. For example, if a page is `pages/custom/index.jsx`, `pages/custom/index.scss`, then the `custom.js` and `custom.css` files will be generated in the `build` directory.

### HTML building

The html build mainly generates two types of pages, one is functional page and the other is site page.

+ Functional page

Docsite will generate an `index.html` file in the root directory based on `redirect.ejs`, which is used as a redirection when accessing the root directory. It also generates a `404.html` for the functionality of custom 404 pages for some static site hosting platforms. When a user visits a page that does not exist, the platform directs the user to `404.html`, which in turn jumps to the normal page.

+ Site page

For the site page, docsite generates an HTML page based on `template.ejs`, which introduces the appropriate static resources. Mainly divided into three types of home page, md page and other pages, now we explain them separately:

1. Home

Docsite converts `index.jsx` in the `src/pages/home` folder to an `index.html` file, placed in the `zh-cn` and `en-us` directories.

2. Md page

In the documentation page, docsite will generate the corresponding HTML file, combining the md document in `docs/zh-cn` (or `docs/en-us`) with `src/pages/documentation`. For example, if a document is `docs/zh-cn/demo.md`, it will generate `zh-cn/docs/demo.html`.

In the blog detail page, docsite will  generate the corresponding HTML file, combining the md document in `blog/zh-cn` (or `blog/en-us`) and `src/pages/blogDetail`. For example, if a blog is `blog/en-us/demo.md`, it will generate `en-us/blog/demo.html`.

3. Other pages

For example, if the jsx file of a page is `src/pages/demo/index.jsx`, it will generate `zh-cn/demo/index.html` and `en-us/demo/index.html`.