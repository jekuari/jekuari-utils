const path = require("path");

module.exports = {
  entry: "./src/index.ts", // entry point of your library
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "@jekuari/utils",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Match .ts and .tsx files
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // Resolve these extensions
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
  },
};
