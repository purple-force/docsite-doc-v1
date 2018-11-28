## Preparation

After successfully installing `docsite`,go to the project root directory and execute `docsite init`. The generated directory is as follows:

```js
.
├── .babelrc
├── .docsite
├── .eslintrc
├── .gitignore
├── .nojekyll
├── blog
│   ├── en-us
│   └── zh-cn
├── docs
│   ├── en-us
│   │   ├── dir
│   │   └── img
│   └── zh-cn
│       ├── dir
│       └── img
├── docsite.config.yml
├── gulpfile.js
├── img
│   ├── dubbo.ico
│   └── system
├── package-lock.json
├── package.json
├── redirect.ejs
├── site_config
│   ├── blog.js
│   ├── community.jsx
│   ├── docs.js
│   ├── home.jsx
│   └── site.js
├── src
│   ├── components
│   │   ├── bar
│   │   ├── button
│   │   ├── footer
│   │   ├── header
│   │   ├── language
│   │   ├── pageSlider
│   │   ├── sidemenu
│   │   └── slider
│   ├── markdown.scss
│   ├── pages
│   │   ├── blog
│   │   ├── blogDetail
│   │   ├── community
│   │   ├── documentation
│   │   └── home
│   ├── reset.scss
│   └── variables.scss
├── template.ejs
├── utils
│   └── index.js
└── webpack.config.js

```

Now let's have a brief introduction to the main files and folders from up and down.

### .docsite

An empty file that is used to determine if the current project has been initialized.

### template.ejs

Templates for all generated HTML pages, modification on it is valid for all pages (except redirect pages).

### redirect.ejs

Redirection template in which to configure redirection. By default, this will generate `index.html` and `404.html` in the project root directory (for the function of custom 404 pages for some static hosting sites).

### blog

The directory of the markdown document and related image resources of the blog ,which has two directories, for Chinese and English.

### docs

The directory of the markdown document and related image resources of the docs ,which has two directories, for Chinese and English.

### img

Store some images of site that are not used by markdown, where system stores some business-independent images.

### site_config

Store Chinese and English configuration data for the entire site, where `site.js` configures some global data, including the local development server port (default is 8080), root path (to start with `/ `but not tail `/`, if it is just `/`, please fill in the empty string), the default language version of the site, top menu and footer section. `home.jsx`, `docs.js`, `blog.js`, `community.jsx` correspond to the configuration of the home page, document page, blog list page, and community page respectively.

### docsite.config.yml

Store the SEO configuration information of the page corresponding to the non-markdown file(v1.3.3 added)

### .nojekyll

Used to skip the check of jekyll

### src

The directory where the source code is stored, `markdown.scss` stores the style file for the markdown document, `variable.scss` stores the public scss variable, `components` stores the public components, and `pages` stores the different pages of the site, `utils` stores some public methods.

Now that the skeleton of the website is set up, you can customize the content and fill in the content.