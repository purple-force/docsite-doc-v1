## 添加文档
文档编写完成后，需要将其添加到页面当中。

### 放置位置
根据文档对应的语言版本，放入`docs`目录下的`zh-cn`或者`en-us`，可以是一层或者多层目录。

### 菜单配置
文档放入对应语言的目录中后，需要在`site_config/docs.js`中配置。其中的`link`字段用于配置访问地址，需要注意的是这个路径需要以语言开头（`/zh-cn`或`/en-us`）。

例如，某个文档的存放位置为`/docs/zh-cn/demo/xxx.md`，那么link字段的配置值为`/zh-cn/docs/demo/xxx.html`。