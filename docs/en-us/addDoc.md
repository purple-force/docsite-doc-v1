## Adding a document
Once the document is done, it needs to be added to the page.

### Where
According to the language version of the document, put `zh-cn` or `en-us` in the `docs` directory, which can be one or more level directory depth.

### Menu Configuration
After the document is placed in the directory of the corresponding language, it needs to be configured in `site_config/docs.js`. The `link` field is used to configure the access address. Note that this path needs to start with a language (`/zh-cn` or `/en-us`).

For example, if a document is stored in `/docs/zh-cn/demo/xxx.md`, the configuration value of the link field is `/zh-cn/docs/demo/xxx.html`.
