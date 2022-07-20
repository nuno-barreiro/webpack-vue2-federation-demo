const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:5000",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "host",
        filename: "remoteEntry.js",
        remotes: {
          hello: "hello@http://localhost:5001/remoteEntry.js",
        },
        shared: require("./package.json").dependencies,
      }),
    ],
  },
  devServer: {
    port: 5000,
  },
};
