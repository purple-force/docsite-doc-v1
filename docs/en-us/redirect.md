## Redirect

`docsite` will generate `index.html` and `404.html` by default in the project root directory according to the template `redirect.ejs` (for custom 404 page of some static site hosting platform). The redirection logic when accessing the root directory is configured in `redirect.ejs`,which is as follows:

```html
<script>
   window.rootPath = '<%= rootPath %>';
   window.defaultLanguage = '<%= defaultLanguage %>';
   var lang = Cookies.get('docsite_language');
   if (!lang) {
     lang = '<%= defaultLanguage %>';
   }
   window.location = window.rootPath + '/' + lang + '/docs/installation.html';
</script>
```