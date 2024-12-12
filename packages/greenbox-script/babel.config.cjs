/* global module */

module.exports = function (api) {
  api.cache(true);
  return {
    exclude: [],
    presets: [
      "@babel/preset-typescript",
      [
        "@babel/preset-env",
        {
          targets: { rhino: "1.7.14" },
          include: ["transform-shorthand-properties"],
        },
      ],
    ],
    plugins: [
      "@babel/plugin-transform-class-properties",
      "@babel/plugin-transform-object-rest-spread",
    ],
  };
};
