1、首先在空目录下 创建 package.json 文件

```
npm init -y
```

2、在该文件夹中安装以下 npm包

```
cnpm i -D webpack webpack-cli typescript ts-loader
```

3、创建并配置 webpack.config.js 文件

```
// 引入一个包
const path = require('path');

// webpack 中的所有配置信息都应该写在 module.exports 中
module.exports = {
  mode:"development",
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件名
    filename: "bundle.js"
  },
  // 指定 webpack 打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用loader
        use: 'ts-loader',
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  }
}
```

4、创建并配置 tsconfig.json 文件

```
{
  "compilerOptions": {
    "module": "ES2015",
    "target": "ES2015",
    "strict": true
  }
}
```

5、在 package.json 中加入启动项

```
"scripts": {
	"build": "webpack"
}
```



### html-webpack-plugin

安装以下 webpack 的插件，来自动生成 html 文件

```
cnpm i -D html-webpack-plugin
```

安装完成之后在 webpack.config.js 中进行配置

```
// 引入一个包
const path = require('path');
// 引入 html 插件
const HTMLWebpackPlugin = require("html-webpack-plugin");

// webpack 中的所有配置信息都应该写在 module.exports 中
module.exports = {
  mode:"development",
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件名
    filename: "bundle.js"
  },
  // 指定 webpack 打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用loader
        use: 'ts-loader',
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },

  // 配置 Webpack 插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: "这是自定义的title"
      template: "./src/index.html"
    })
  ]
};
```



### webpack-dev-server

安装 webpack 开发服务器

```
cnpm i -D webpack-dev-server
```

安装完成之后在 package.json 配置

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open chrome.exe"
  },
```



### clean-webpack-plugin

安装插件用于清空 dist 文件夹下的文件

```
cnpm i -D clean-webpack-plugin
```

安装完成之后配置 webpack.config.js 文件

```
// 引入一个包
const path = require('path');
// 引入 html 插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 引入 clean 插件
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// webpack 中的所有配置信息都应该写在 module.exports 中
module.exports = {
  mode:"development",
  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在的目录
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件名
    filename: "bundle.js"
  },
  // 指定 webpack 打包时要使用模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用loader
        use: 'ts-loader',
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },

  // 配置 Webpack 插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      // title: "这是自定义的title"
      template: "./src/index.html"
    })
    
  ]
};
```



### babel

```
cnpm i -D @babel/core @babel/preset-env babel-loader core-js
```

