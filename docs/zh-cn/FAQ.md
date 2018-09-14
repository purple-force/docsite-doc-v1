# FAQ

### Q:
```
usr/local/lib/node_modules/docsite/lib/generateHTMLFile.js:24
      defaultLanguage: siteConfig.defaultLanguage,
                                  ^
TypeError: Cannot read property 'defaultLanguage' of undefined
    at generateHTMLFile (/usr/local/lib/node_modules/docsite/lib/generateHTMLFile.js:24:32)
    at start (/usr/local/lib/node_modules/docsite/lib/start.js:58:2)
    at Object.<anonymous> (/usr/local/lib/node_modules/docsite/bin/docsite.js:22:5)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)
```

```
/usr/local/lib/node_modules/docsite/lib/generateHTMLFile.js:19
    window.rootPath = siteConfig.rootPath;
                                 ^
TypeError: Cannot read property 'rootPath' of undefined
    at generateHTMLFile (/usr/local/lib/node_modules/docsite/lib/generateHTMLFile.js:19:32)
    at build (/usr/local/lib/node_modules/docsite/lib/build.js:27:3)
    at Object.<anonymous> (/usr/local/lib/node_modules/docsite/bin/docsite.js:25:5)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:191:16)

```

### A:

1. 确保`site_config/site.js(x)`文件存在
2. 如果该文件存在且采用了`jsx`语法，确保该文件中引入了`react`(`import React from 'react';`)

##
### Q:

```
Error: listen EADDRINUSE 127.0.0.1:8080
    at Object._errnoException (util.js:992:11)
    at _exceptionWithHostPort (util.js:1014:20)
    at Server.setupListenHandle [as _listen2] (net.js:1355:14)
    at listenInCluster (net.js:1396:12)
    at doListen (net.js:1505:7)
    at _combinedTickCallback (internal/process/next_tick.js:141:11)
    at process._tickCallback (internal/process/next_tick.js:180:9)
    at Function.Module.runMain (module.js:695:11)
    at startup (bootstrap_node.js:191:16)
    at bootstrap_node.js:612:3
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! site@0.0.1 start: `gulp`
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the site@0.0.1 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```

### A:

开发端口被占用，请修改`site_config/site.js`文件中的`port`字段。


