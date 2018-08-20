## SEO

As an open source static documentation site, we want users to be able to find the content they need quickly by search engines, so SEO is especially important.

For the md document, docsite provides three metadata configuration items: `title`, `keywords`, and `description`. At the same time, the corresponding jsx page is rendered into static HTML and combined into the final generated page.

After the entire page site is completed and published, in order for the search engine to include the site faster, a site map needs to be provided to the search engine.

### Sitemap generation

Open a page in the site (preferably the document page and blog page) and copy the page address to the input box of [https://www.xml-sitemaps.com/](https://www.xml-sitemaps.com/), click `Start`, and it will generate a site map.

There is no obvious link between the Chinese and English versions of the site, so they need to be generated separately, then you should manually merged them into one and named `sitemap.xml`. Of course, you can also choose other site map generation tools.

### Sitemap submission

In addition to placing the generated site map file in the project root directory, you can also proactively provide a site map to the search engine. The main search engines are Google and Baidu, where you can submit sitemaps to the webmaster platforms of the two search engines. The links are:
+ [Google Webmaster](https://www.google.com/webmasters/tools/home)
+ [Baidu Webmaster](https://ziyuan.baidu.com/site/index)