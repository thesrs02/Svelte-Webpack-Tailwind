const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sveltePreprocess = require("svelte-preprocess");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    bundle: ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    path: __dirname + "/public/dist",
    filename: "[name].js",
    chunkFilename: "[id].js",
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(svelte)$/,
        use: {
          loader: "svelte-loader",
          options: {
            preprocess: sveltePreprocess({
              postcss: true,
            }),
            compilerOptions: {
              dev: !prod, // Default: false
            },
            emitCss: true, // for making component syle tag work with poscss
            hotOptions: {
              preserveLocalState: false,
              noPreserveStateKey: "@!hmr",
              noReload: false,
              optimistic: false,
              acceptAccessors: true,
              acceptNamedExports: true,
            },
          },
        },
      },

      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "public/template.html",
    }),
  ],
  devtool: false,
};
