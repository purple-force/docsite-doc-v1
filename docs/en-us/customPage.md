## Custom page

The overall architecture of docsite is based on react, so you should know something about it. You can view [react](https://reactjs.org/) to learn it.

The docsite built-in template includes the home page, document page, blog list page, blog detail page, and community page, corresponding to `home`, `documentation`, `blog`, `blogDetail`, `community` in the `src/pages` directory. For js and css resources, when building, the folder name in the `src/pages` directory will be used as the name of the js and css resources, and the corresponding js and css files will be generated in the `build` directory.

### Page Writing
When customizing the page, create a new folder in the `src/pages` directory. docsite will process the `index.jsx` and `index.scss` files in the folder as pages.

The main structure of the `index.jsx` of a custom page is as follows:

```jsx
class CustomPage extends Language {
  constructor(props) {
    super(props);
    // others
  }

  render() {
    const language = this.getLanguage();
    // others
    return (
      <div>
        <Header
          currentKey="customKey" // key defined in site_config/site.js pageMenu
          Type="normal"
          Logo="/img/docsite.png"
          Language={language}
          onLanguageChange={this.onLanguageChange}
        />
        {/* others */}
      </div>
    )
  }
}

document.getElementById('root') && ReactDOM.render(<CustomPage />, document.getElementById('root'));

export default CustomPage;
```
Now let us have a explanation:
1. The entire page should extend the `src/components/language` component, which provides two methods `onLanguageChange` and `getLanguage` for language switching (passed to the Header component) and the language value.
2. To support SEO, docsite will call `ReactDOMServer.render` to render the page jsx into a static HTML string and finally combine it into the page, so lifecycle methods of server rendering related, such as `constructor`, `componentWillMount`, `render` etc. that will be called, do not have undefined or unrecognized variables and methods, including the components they depend on, or an error will occur.
3. `document.getElementById('root') && ReactDOM.render(<CustomPage />, document.getElementById('root'));` is for normal page rendering, the statements before `&&` is used to prevent errors when rendering on the server side ,the dom node does not exist.
4. `export default CustomPage;` The export page is used by docsite to render the page into a static HTML string.

### Language Configuration
To support internationalization, you need to configure the international text of the page. Create a new file in the `site_config` directory, configure the required text, and import it in the page. Its basic structure is as follows:
```js
export default {
  'zh-cn': {

  },
  'en-us': {

  },
}
```

### Add to site

Once the page is complete, it needs to be added to the site. Define `key`, `title`, `link`, etc. of the page in `pageMenu` in the `site_config/site.js` file.

Where `key` is used for the `Header`'s property `currentKey`, which is used to setting the selected state of the top menu. `title` is used for the display title of the top menu. `link` is used to set the access link. The rules of link are as follows:

1. Start with `/zh-cn` or `/en-us`.
2. If the folder name of the page is custom, the English access link is `/en-us/custom/index.html`, and the Chinese access link is `/zh-cn/custom/index.html`.