# Command Journal

```bash
npm inti -y
npm install react react-dom
npm install webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin --save-dev
```

```js
// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path:path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "public", "index.html"),
      }),
    ],
    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
        ]
      },
  devServer: {
    port: 3000,
  },
};
```

```bash
npm install style-loader css-loader --save-dev
```

```js
// ...
module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
// ...
```

```babel
// .babelrc
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

```bash
npm install dotenv --save
npm install dotenv-webpack --save-dev
```

```bash
npm install react-router-dom
```

```bash
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```