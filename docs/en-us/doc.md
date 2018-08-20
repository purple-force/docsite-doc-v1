## Document Writing

### Metadata
The markdown file supports custom metadata at the top of the document. The data between the top `---` (at least three `-`) is considered to be metadata, and one key occupies one line. Currently, the three fields of `title`, `keywords`, and `description` are supported. When static HTML is generated, it is used as the title of the page label, page keywords, and page description, which is convenient for the search engine to better include the site, thereby facilitating SEO.

```js
---
title: title
keywords: keywords1,keywords2,keywords3
description: some description
---
```

### 路径

When writing a markdown document, mutual references between documents are required. The relative path is written more easily than the absolute one, and the reference between the documents in the site is more convenient.

When you need to reference other documents, the path can be referenced by the relative file path in the project directory.

Similarly, when you need to reference an image resource within a project, the reference path is also a relative file path and will eventually be processed into the correct absolute path.