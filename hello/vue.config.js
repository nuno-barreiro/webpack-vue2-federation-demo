const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

module.exports = {
  publicPath: "http://localhost:5001",
  transpileDependencies: true,
  configureWebpack: {
    optimization: {
      splitChunks: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "hello",
        filename: "remoteEntry.js",
        library: { type: "var", name: "hello" },
        exposes: {
          "./HelloWorldComponent": "./src/components/HelloWorld.vue",
        },
      }),
    ],
  },
  devServer: {
    port: 5001,
  },
};
