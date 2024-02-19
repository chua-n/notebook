import { WebpackConfiguration, webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";

export default defineUserConfig({
  base: "/",
  dest: "dist",

  lang: "zh-CN",
  title: "川的笔记本",
  description: "这是我用 vuepress 工具生成的笔记，采用 vuepress-theme-hope 主题，简单好用，采用 Markdown 编写，像书本一样展示。",

  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  },

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,

  // 修改 webpack 配置
  bundler: webpackBundler({
    configureWebpack: (config: WebpackConfiguration, isServer: boolean, isBuild: boolean) => {
      config.devtool = 'eval-source-map'; // 开发环境调试时浏览器展示源码（好像不生效）
      config.plugins?.push(
        new CopyPlugin({
          patterns: [
            {
              from: path.resolve(process.cwd(), './CNAME'),
              to: ".",
            },
          ],
        })
      );
    }
  }),
});