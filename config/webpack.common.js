const webpack = require('webpack');
const path = require('path');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
// problem with copy-webpack-plugin
const AssetsPlugin = require('assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlElementsPlugin = require('./html-elements-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const METADATA = {
  title: 'hotpot-admin - Vue.js 2 后台管理模板',
  description: 'hot-pot Vue.js后台管理模板',
  isDevServer: helpers.isWebpackDevServer()
};

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
module.exports = function (options) {
  isProd = options.env === 'production';
  return {

    /*
     * Cache generated modules and chunks to improve performance for multiple incremental builds.
     * This is enabled by default in watch mode.
     * You can pass false to disable it.
     *
     * See: http://webpack.github.io/docs/configuration.html#cache
     */
    //cache: false,

    /*
     * See: http://webpack.github.io/docs/configuration.html#entry
     */
    entry: {
      index: helpers.root('src/index.js')
    },

    /*
     * Options affecting the resolving of modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#resolve
     */
    resolve: {

      /*
       * An array of extensions that should be used to resolve modules.
       *
       * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
       */
      extensions: ['.js', '.css', '.scss', '.json', '.vue'],

      // An array of directory names to be resolved to the current directory
      modules: [helpers.root('src'), 'node_modules'],
      alias: {
        components: helpers.root('src/components'),
        assets: helpers.root('src/assets'),
        pages: helpers.root('src/pages'),
        configs: helpers.root('src/configs')
      }
    },
    externals: {
      'vue': 'Vue',
      'jquery': 'jQuery',
      'moment': 'moment'
    },
    /*
     * Options affecting the normal modules.
     *
     * See: http://webpack.github.io/docs/configuration.html#module
     */
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              scss: ExtractTextPlugin.extract({
                loader: 'css-loader!sass-loader',
                fallbackLoader: 'vue-style-loader'
              })
            }
          },
          exclude: /node_modules/
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [helpers.root('src')],
          exclude: /node_modules/
        },
        /*
         * Json loader support for *.json files.
         *
         * See: https://github.com/webpack/json-loader
         */
        {
          test: /\.json$/,
          loader: 'json-loader'
        },

        /*
         * to string and css loader support for *.css files
         * Returns file content as string
         *
         */
        {
          test: /\.css$/,
          // loaders: ['to-string-loader', 'css-loader']
          loaders: ['raw-loader']
        },
        {
          test: /\.scss$/,
          loaders: ['raw-loader', 'sass-loader']
        },
        {
          test: /\.woff(2)?(\?v=.+)?$/,
          loader: 'url-loader?name=static/[md5:hash:hex].[ext]&&limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=.+)?$/,
          loader: 'file-loader?name=static/[md5:hash:hex].[ext]'
        },
        /* Raw loader support for *.html
         * Returns file content as string
         *
         * See: https://github.com/webpack/raw-loader
         */
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },
        /* File loader for supporting images, for example, in CSS files.
         */
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file-loader?name=static/images/[md5:hash:hex].[ext]'
        }
      ]
    },

    /*
     * Add additional plugins to the compiler.
     *
     * See: http://webpack.github.io/docs/configuration.html#plugins
     */
    plugins: [
      new ExtractTextPlugin({filename: '[name].css', allChunks: true}),

      new AssetsPlugin({
        path: helpers.root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),
      /*
       * Plugin: CommonsChunkPlugin
       * Description: Shares common code between the pages.
       * It identifies common modules and put them into a commons chunk.
       *
       * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
       * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
       */
      new CommonsChunkPlugin({
        name: ['vendor'].reverse(),
        minChunks: 2,
        children: true,
        async: true
      }),

      /*
       * Plugin: CopyWebpackPlugin
       * Description: Copy files and directories in webpack.
       *
       * Copies project static assets.
       *
       * See: https://www.npmjs.com/package/copy-webpack-plugin
       */
      new CopyWebpackPlugin([{
        from: 'static',
        to: 'static'
      }]),

      /*
       * Plugin: HtmlWebpackPlugin
       * Description: Simplifies creation of HTML files to serve your webpack bundles.
       * This is especially useful for webpack bundles that include a hash in the filename
       * which changes every compilation.
       *
       * See: https://github.com/ampedandwired/html-webpack-plugin
       */
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head',
        minify: {
          collapseWhitespace: options.htmlMinify
        }
      }),

      /*
       * Plugin: ScriptExtHtmlWebpackPlugin
       * Description: Enhances html-webpack-plugin functionality
       * with different deployment options for your scripts including:
       *
       * See: https://github.com/numical/script-ext-html-webpack-plugin
       */
      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),

      /*
       * Plugin: HtmlHeadConfigPlugin
       * Description: Generate html tags based on javascript maps.
       *
       * If a publicPath is set in the webpack output configuration, it will be automatically added to
       * href attributes, you can disable that by adding a "=href": false property.
       * You can also enable it to other attribute by settings "=attName": true.
       *
       * The configuration supplied is map between a location (key) and an element definition object (value)
       * The location (key) is then exported to the template under then htmlElements property in webpack configuration.
       *
       * Example:
       *  Adding this plugin configuration
       *  new HtmlElementsPlugin({
       *    headTags: { ... }
       *  })
       *
       *  Means we can use it in the template like this:
       *  <%= webpackConfig.htmlElements.headTags %>
       *
       * Dependencies: HtmlWebpackPlugin
       */
      new HtmlElementsPlugin({
        headTags: require('./head-config.common')
      }),

      /**
       * See: https://github.com/jantimon/favicons-webpack-plugin
       */
      new FaviconsWebpackPlugin({
        logo: helpers.root('src/assets/icon/favicon.png'),
        prefix: 'icons-[hash]/',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          favicons: true,
          firefox: true,
          coast: false,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false
        }
      }),

      /**
       * Plugin LoaderOptionsPlugin (experimental)
       *
       * See: https://gist.github.com/sokra/27b24881210b56bbaff7
       */
      new LoaderOptionsPlugin({}),
      new webpack.ProvidePlugin({
        'configs': 'configs'
      })
    ],

    /*
     * Include polyfills or mocks for various node stuff
     * Description: Node configuration
     *
     * See: https://webpack.github.io/docs/configuration.html#node
     */
    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  }
}
