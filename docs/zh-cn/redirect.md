---
title: 重定向
---

## 重定向

`docsite`默认会在项目根目录下根据模板`redirect.ejs`生成`index.html`和`404.html`（用于某些静态站点托管平台自定义404页面的功能）。`redirect.ejs`中配置了访问到根目录时的跳转逻辑。
如下所示：

```html
<script>
  window.rootPath = '<%= rootPath %>';
  window.defaultLanguage = '<%= defaultLanguage %>';
  var lang = Cookies.get('docsite_language');
  if (!lang) {
    lang = '<%= defaultLanguage %>';
  }
  window.location = window.rootPath + '/' + lang + '/docs/installation.html';
</script>
```