## SEO

作为一个开源静态文档站点，我们希望用户能够通过搜索引擎更快的访问到需要的内容，因此SEO就显得尤为重要。

docsite对于markdown文档，提供了`title`、`keywords`、`description`三个元数据配置项。同时将对应的jsx页面渲染成静态HTML，组合到最终生成的页面中去。

对于非markdown文档页面，`title`、`keywords`、`description`三个配置项在项目根目录下的`docsite.config.yml`(v1.3.3版本添加，旧工程需手动添加该文件)中，内容如下：
```yaml
pages:
 # key is the dirname of pages in src/pages, not including documentation and blogList that is related to markdown file
 home:
  # 首页配置
  zh-cn:
   title: '网页标签title'
   keywords: '关键词1，关键词2'
   description: '页面内容简介'
  # home config
  en-us:
   title: 'page title'
   keywords: 'keyword1,keyword2'
   description: 'page description'
 community:
  # 社区页配置
  zh-cn:
   title: '网页标签title'
   keywords: '关键词1，关键词2'
   description: '页面内容简介'
  # community page config
  en-us:
   title: 'page title'
   keywords: 'keyword1,keyword2'
   description: 'page description'
 blog:
  # 博客列表页配置
  zh-cn:
   title: '网页标签title'
   keywords: '关键词1，关键词2'
   description: '页面内容简介'
  en-us:
   # blog list page config
   title: 'page title'
   keywords: 'keyword1,keyword2'
   description: 'page description'
```

在整个页面站点完成并发布后，为使搜索引擎更快的收录站点，需要向搜索引擎提供站点地图。

### 站点地图生成

打开站点中的某个页面（最好是文档页面和博客页面），将页面地址拷贝填入[https://www.xml-sitemaps.com/](https://www.xml-sitemaps.com/)的输入框，点击开始，会生成一份站点地图。

因站点的中英文版本之间无明显的链接相连，所以需中英文分别生成，然后手动合并成一份，并命名为`sitemap.xml`。当然，你也可以选择其他站点地图生成工具。

### 站点地图提交

除了将生成的站点地图文件放置在项目根目录外，你还可以主动向搜索引擎提供站点地图。目前主流的搜索引擎为Google和百度，可以分别向这两个搜索引擎的站长平台提交站点地图，链接为：
+ [Google站长](https://www.google.com/webmasters/tools/home)
+ [百度站长](https://ziyuan.baidu.com/site/index)