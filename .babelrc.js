module.exports = {
  presets: ["next/babel"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["."],
        alias: {
          components: "./components",
          pages: "./pages",
          public: "./public",
          styles: "./styles",
          util: "./util",
        },
      },
    ],
  ],
}
