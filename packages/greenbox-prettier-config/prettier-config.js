module.exports = {
  importOrder: ["<THIRD_PARTY_MODULES>", "^\\.\\./", "^\\./"],
  importOrderSeparation: true,
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};
