---
title: Custom style
---

## Custom style
Custom styles are divided into the customization of the entire site and the style of the document display.

### Site customization
The `variables.scss` file in the `src` directory defines some scss variables that control the overall display style of the site. By modifying these variables, you can get different styles of site.

Of course, if you still feel that you are not satisfied with the results, you can modify the style file of each specific page.

### Document display style customization
The `markdown.scss` file in the `src` directory defines the style of the document display style which is divided into two parts, the presentation of the document and the highlighting of the code.

+ Document display

By default github style [https://github.com/sindresorhus/github-markdown-css](https://github.com/sindresorhus/github-markdown-css), if you want other styles, please modify `markdown.scss` file.

+ Code highlighting

Select the favorite highlight theme in [https://highlightjs.org/static/demo/](https://highlightjs.org/static/demo/), and then according to the selected theme name, copy the corresponding style file in [https: //github.com/isagalaev/highlight.js/tree/master/src/styles](https://github.com/isagalaev/highlight.js/tree/master/src/styles) to `markdown.scss`.