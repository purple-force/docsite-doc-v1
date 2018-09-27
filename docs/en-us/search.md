## Global Search

> It was introduced by the built-in template of docsite since v1.2.0
>
> It depends on Google Search and Baidu Search, so make sure your site has been[included](./SEO.md)

In `site_config/site.js` files,you need to configure two fields:`domain` and `defaultSearch`.

### domain

It is used to configure the domain for Search Engine.For example,your site is `https://docsite.js.org/zh-cn/docs/installation.html?p=1`,then the value of `domain` is `docsite.js.org`,not including protocol,path,search params and so on.

### defaultSearch

It is used to configure default search engine,and can be `google`,`baidu`.Of course,you can switch them by click the search engine icon when using it.


After filling the keywords,you can go search by pressing the enter.

