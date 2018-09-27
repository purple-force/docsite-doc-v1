## 全局搜索

> 该功能自1.2.0版本内置模板添加。
>
> 该功能依赖于goolge搜索和百度搜索，因此确保站点被二者[收录](./SEO.md)

在`site_config/site.js`配置文件中，有两个字段需要配置：`domain`和`defaultSearch`。

### domain

用于设置站点的域名。比如站点地址为`https://docsite.js.org/zh-cn/docs/installation.html?p=1`，那么设置该字段为`docsite.js.org`。不包含网络协议、path、查询参数等。

### defaultSearch

用于设置初始展示的搜索引擎，可选值为`google`、`baidu`。当然，在使用过程中，可以通过点击图标随意进行切换。


在填写完关键字后，按下回车键就可以进行搜索了。

