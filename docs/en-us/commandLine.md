---
title: CommandLine usage
---

## CommandLine usage
The main commands for the `docsite` integration are only three, mainly as follows:

### `docsite init`
Executing this command in the project root directory will initialize a site development template and install related dependencies in the directory.

### `docsite start`
Executing this command will start a development server locally, the default port number is 8080 (can be changed in the `port` field in `site_config/site.js`). This page will also be automatically opened in the browser. During the development process, when the source code is modified, including the markdown document, it will be automatically compiled. After refreshing the browser, you can see the updated result.

### `docsite build`
After the local development is completed, run the command to compile and build the source code and markdown document to generate the constructed file.

### Other
Execute `docsite -h` for more commands.