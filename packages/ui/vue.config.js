/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const { routesSeo } = require('./src/router/seo');

const paths = Object.values(routesSeo)
  .filter((el) => !el.meta.skipSiteMap)
  .map((el) => ({ path: el.path }));

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/main.scss";
        `,
      },
    },
  },
  configureWebpack: () => {
    return {
      plugins: [
        new webpack.DefinePlugin({
          APP_VERSION: JSON.stringify(require('./package.json').version),
        }),
        new SitemapPlugin({
          base: 'https://avalon-game.com/',
          paths,
          options: {
            filename: 'sitemap.xml',
            skipgzip: true,
            lastmod: true,
            changefreq: 'daily',
            priority: 0.8,
          },
        }),
      ],
    };
  },
});
