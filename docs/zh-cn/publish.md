---
title: 发布站点
---

## 发布站点
> 首先，需要配置下站点的根路径，修改`site_config/site.js`中的`rootPath`字段。规则如下：
> + 当部署根路径为`/`，则设置为`''`空字符串即可。
> + 当部署根路径不为`/`，则设置为具体的根路径，注意需以`/`开头，但不能有尾`/`。

> 至此，整个站点的开发已经完成，在项目根目录下执行docsite build进行项目构建。

### 站点托管

你可以将站点托管在github pages上或者自己的服务器上

### github pages托管

在github上新建仓库，将项目代码上传至仓库中。打开项目的github页面，选择Setting面板，如下所示：
![](https://img.alicdn.com/tfs/TB1rbTHxXGWBuNjy0FbXXb4sXXa-1600-134.png)

转到GitHub Pages版面，选择Source后点击Save，会给出站点的访问地址，访问该地址即可看到你的站点。
![](https://img.alicdn.com/tfs/TB1bNegxDtYBeNjy1XdXXXXyVXa-1612-1296.png)

### 服务器托管

将项目中的`build`目录、`img`目录、`zh-cn`目录、`en-us`目录、`index.html`及其他图片资源放置在服务器中即可。
