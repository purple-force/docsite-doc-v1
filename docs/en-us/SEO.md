## SEO

As an open source static documentation site, we want users to be able to find the content they need quickly by search engines, so SEO is especially important.

For markdown documents, docsite provides three metadata configuration items: `title`, `keywords`, and `description`. At the same time, the corresponding jsx page is rendered into static HTML and combined into the final generated page.

For non-markdown pages, the three configuration items `title`, `keywords`, `description` are in the `docsite.config.yml` in the root directory of the project (added in v1.3.3, for the old project it needs to be manually added). Content is as follows：
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

After the entire page site is completed and published, in order for the search engine to include the site faster, a site map needs to be provided to the search engine.

### Sitemap generation

Open a page in the site (preferably the document page and blog page) and copy the page address to the input box of [https://www.xml-sitemaps.com/](https://www.xml-sitemaps.com/), click `Start`, and it will generate a site map.

There is no obvious link between the Chinese and English versions of the site, so they need to be generated separately, then you should manually merged them into one and named `sitemap.xml`. Of course, you can also choose other site map generation tools.

### Sitemap submission

In addition to placing the generated site map file in the project root directory, you can also proactively provide a site map to the search engine. The main search engines are Google and Baidu, where you can submit sitemaps to the webmaster platforms of the two search engines. The links are:
+ [Google Webmaster](https://www.google.com/webmasters/tools/home)
+ [Baidu Webmaster](https://ziyuan.baidu.com/site/index)