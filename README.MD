====================================
I. webpack and webpack-cli
1. $ npm init
2. $ npm i webpack webpack-cli -D
3. In "script" of package.json add
"scripts": {
    "start": "webpack --mode development",
    "build": "webpack --mode production"
}
4. in root folder add src/index.js, in index.js console.log('hello world');
5. Run Application
$ npm run start
$ npm run build
It will create dist folder and main.js
====================================
II. Setting Up React and Babel
1. $ npm i react react-dom -S
2. Then install `babel-core`, `babel-loader`, `babel-preset-env` and `babel-preset-react`, `babel-preset-es2015` as a dev dependency
$ npm i babel-core babel-loader babel-preset-env babel-preset-react babel-preset-es2015 -D
- babel-core: Transforms your ES6 code into ES5
- babel-loader: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel
- babel-preset-env: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
- babel-preset-react: Babel preset for all React plugins, for example turning JSX into functions
3. We need to create a webpack.config.js file to state the rules for our babel-loader
4. Install html-webpack-plugin as a dev dependency:
$ npm i html-webpack-plugin -D
5. need to make a separate file called .babelrc to provide the options for babel-loader
$ touch .babelrc inside

Or, alternatively you can add a `babel` object in package.json
"babel": {
  "presets": [
    "env",
    "react",
    "es2015"
  ]
},
====================================
Setting up CSS
$ npm i css-loader style-loader -D
For sass: $ npm install node-sass sass-loader  -D
Setting up Image
- File Loader
$ npm install --save-dev file-loader
====================================
III. Setting up webpack-dev-server
1. $ npm i webpack-dev-server -D
2. Change package.json like this
"scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
}
3. If create dev, prod and common config for webpack
"scripts": {
    "start": "webpack-dev-server --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
},
====================================
IV. References
1. Add rule into webpack.confif.js
- SCSS
https://github.com/webpack-contrib/sass-loader
- Images
https://www.npmjs.com/package/file-loader
{
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                // name: '[path][name].[ext]',
                // name: 'dirname/[hash].[ext]',
                name: '[name].[ext]',
                outputPath: 'images/'
            }
        },
    ]
}

======================================
## New Webpack
1. Create `webpack-common.js`, `webpack.dev.js` and `webpack.prod.js`, remove `webpack.config.js`
- $ npm install --save-dev webpack-merge
- $ npm i --save-dev clean-webpack-plugin
- in package.js, script change:
"scripts": {
+     "start": "webpack-dev-server --open --config webpack.dev.js",
+     "build": "webpack --config webpack.prod.js"

# Min js file
1. `UglifyjsWebpackPlugin`
    $ npm i -D uglifyjs-webpack-plugin
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            test: /\.js($|\?)/i,
            uglifyOptions: {
                compress  : true,
            }
        }),
2. `Build time gzip (preferred)`
    Instead of generating bundle.js, generate bundle.js.gz using Webpack’s compression plugin. Then add a middleware to return gzipped JS file.
    1. $ npm install compression-webpack-plugin --save-dev
    2. Import the plugin to webpack.config.prod.js
        const CompressionPlugin = require('compression-webpack-plugin');
        In plugins:[], add
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8
        })
======================================
## REDUX
1. install packages
$ npm i --save-dev redux react-redux
2. Debug Redux Inspector
- $ npm i -D redux-devtools-extension redux-logger redux-thunk
- in configStore.js
import { composeWithDevTools } from 'redux-devtools-extension';
const loggerMiddleware = createLogger()
export default function configureStore(preloadedState) {
	return createStore(
		rootReducer, preloadedState, composeWithDevTools(
			applyMiddleware(
				thunkMiddleware,
				loggerMiddleware
			)
		)
	)
};
- in Main.js
import configureStore from './configStore';
const store = configureStore();
=======================================
## Errors
1. Error `arrow function with babel` like increment = () => {}
- $ npm install --save-dev babel-plugin-transform-class-properties
and inside `common.webpack.js` add
test: /\.js$/,
exclude: /node_modules/,
use: {
    loader: 'babel-loader',
    query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-class-properties']
    }
}
- ref https://babeljs.io/docs/plugins/transform-class-properties/
=======================================
### Optimization
1. To minimize your scripts (and your css, if you use the css-loader) webpack supports a simple option:
--optimize-minimize resp. new webpack.optimize.UglifyJsPlugin()
2. Deduplication
--optimize-dedupe resp. new webpack.optimize.DedupePlugin()
3. Chunks
After compiling you might notice that there are too many chunks that are too small - creating larger HTTP overhead. Luckily, Webpack can post-process your chunks by merging them. You can provide two options:
Limit the maximum chunk count with --optimize-max-chunks 15 new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})
Limit the minimum chunk size with --optimize-min-chunk-size 10000 new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000})
4. Single-Page-App
<script src="entry-chunk.js" type="text/javascript" charset="utf-8"></script>
<script src="3.chunk.js" type="text/javascript" charset="utf-8"></script>
5. Multi-Page-App
webpack p1=./page1 p2=./page2 p3=./page3 [name].entry-chunk.js
module.exports = {
	entry: {
		p1: "./page1",
		p2: "./page2",
		p3: "./page3"
	},
	output: {
		filename: "[name].entry.chunk.js"
	}
}
=======================================
## Bootstrap npm package
$ npm i --save-dev bootstrap jquery popper.js
## Redux Observable
$ npm install --save-dev redux-observable rxjs rxjs-compat
## ESLint
https://www.robinwieruch.de/react-eslint-webpack-babel/