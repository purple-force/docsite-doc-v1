---
title: Publish site
---

## Publish site

> First, you need to configure the root path of the site and modify the `rootPath'field in `site_config/site.js'. The rules are as follows:
> + When the deployment root path is `/', set it to `''`empty string.
> + When the deployment root path is not `/', it is set to the specific root path. Note that it should start with `/', but not end with `/'.
> Now the development work of the entire site has been completed, and the project is built by executing docsite build in the project root directory.

### Site hosting

You can host your site on github pages or on your own server.

### Github pages

Create a new repository on github and upload the project code to the repository. Open the project's github page and select the Settings panel as shown below:
![](https://img.alicdn.com/tfs/TB1rbTHxXGWBuNjy0FbXXb4sXXa-1600-134.png)

Go to the `GitHub Pages` section, select `Source` and click `Save`. which will give you the address of the site. You can see your site by visiting this address.
![](https://img.alicdn.com/tfs/TB1bNegxDtYBeNjy1XdXXXXyVXa-1612-1296.png)

### Your server

Place the `build` directory, `img` directory, `zh-cn` directory, `en-us` directory, `index.html` and other image resources in the project on the server.