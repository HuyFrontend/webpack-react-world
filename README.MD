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
5. Run
$ npm run start
$ npm run build
It will create dist folder and main.js
====================================
II. Setting Up React and Babel
1. $ npm i react react-dom -S
2. Then install babel-core, babel-loader, babel-preset-env and babel-preset-react as a dev dependency
$ npm i babel-core babel-loader babel-preset-env babel-preset-react -D
- babel-core: Transforms your ES6 code into ES5
- babel-loader: Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel
- babel-preset-env: Determines which transformations/plugins to use and polyfills (provide modern functionality on older browsers that do not natively support it) based on the browser matrix you want to support
- babel-preset-react: Babel preset for all React plugins, for example turning JSX into functions
3. We need to create a webpack.config.js file to state the rules for our babel-loader
4. Install html-webpack-plugin as a dev dependency:
$ npm i html-webpack-plugin -D
====================================
Setting up CSS
$ npm i css-loader style-loader -D
For sass: $ npm install sass-loader -D
====================================
III. Setting up webpack-dev-server
1. $ npm i webpack-dev-server -D
2. Change package.json like this
"scripts": {
    "start": "webpack-dev-server --mode development --open",
    "build": "webpack --mode production"
}
====================================
IV. References
1. Add rule into webpack.confif.js
- SCSS
{
    //SCSS LOADER
    test: /\.scss$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax']
}
- Images
{
    test: /.*\.(gif|png|jpe?g|svg)$/i,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: '/images/[name]_[hash:7].[ext]',
            }
        },
    ]
}