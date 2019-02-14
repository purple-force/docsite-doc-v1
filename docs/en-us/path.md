---
title: Path prefix
---

## Path prefix

When a site is deployed on some static hosting site, its root path is not `/`. For example, github pages have a root path of `/repertory_name/`. If you need to deploy to multiple platforms, it will be a nightmare to modify the access address of the resource. To avoid this, docsite extracts the root path and places it in the `rootPath` field in `site_config/site.js`. The configuration rules are as follows:

+ When the deployment root path is `/`, set it to `''`empty string.

+ When the deployment root path is not `/`, set it to the specific root path. Note that you need to start with `/`, but not end with a tail `/`.

Before running `docsite build`, make sure the `rootPath` is configured correctly.

### Path configuration

For the page links in the site, when configuring in the `site_config` directory, please start with `/zh-cn` or `/en-us`, the built-in page will process these links, splice the `rootPath`, and then get the full access links.