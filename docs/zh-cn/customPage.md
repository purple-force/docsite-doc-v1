---
title: 自定义页面
---

## 自定义页面

docsite整体架构基于react，所以自定义页面需要有一定的react基础，可查看[react官网](https://reactjs.org/)进行学习。

docsite内置模板默认包含首页、文档页、博客列表页、博客详情页、社区页，分别对应`src/pages`目录下的`home`、`documentation`、`blog`、`blogDetail`、`community`。对于js和css资源，docsite在构建时，会将`src/pages`目录下的文件夹名称作为js和css资源的名称，在`build`目录中生成对应的js和css文件。

### 页面编写
自定义页面时，请在`src/pages`目录下新建一个文件夹，docsite会将文件夹下的`index.jsx`和`index.scss`文件作为页面进行处理。

一个自定义页面的`index.jsx`主体结构如下：

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
          type="normal"
          logo="/img/docsite.png"
          language={language}
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
现对整个页面作下说明：
1. 整个页面需继承`src/components/language`组件，该组件提供两个方法`onLanguageChange`和`getLanguage`，分别用于语言切换（传递给Header组件即可）和获取语言版本。
2. 为支持SEO，docsite会调用`ReactDOMServer.render`将页面jsx渲染成一段静态HTML字符串，并最终组合到页面当中去，所以在`constructor`、`componentWillMount`、`render`等服务端渲染会调用的生命周期方法中，不要出现未定义的或者无法识别的变量和方法，包括其依赖的组件，否则会出现错误。
3. `document.getElementById('root') && ReactDOM.render(<CustomPage />, document.getElementById('root'));`用于正常的页面渲染，`&&`前一句防止在服务端渲染时dom节点不存在导致报错。
4. `export default CustomPage;`导出页面用于docsite将页面渲染成一段静态HTML字符串。

### 语言包配置
为支持国际化，需要配置页面的国际化文案。在`site_config`目录下新建一个文件，将所需要的文案配置其中，并在页面中引入。其基本结构如下：
```js
export default {
  'zh-cn': {

  },
  'en-us': {

  },
}
```

### 添加到站点

页面定义完成后，需要将其添加到站点中。在`site_config/site.js`文件中的`pageMenu`中定义页面的`key`、`title`、`link`等。

其中`key`用于`Header`的`currentKey`，设置顶部菜单的选中状态。`title`用于顶部菜单的显示标题。`link`用于设置访问链接，链接设置规则如下：

1. 需以`/zh-cn`或`/en-us`开头。
2. 假如页面所在的文件夹名称为custom，则英文访问链接为`/en-us/custom/index.html`，中文访问链接为`/zh-cn/custom/index.html`。

