/* config-overrides.js */
const path = require("path");

module.exports = function override(config, env) {
  config.resolve.modules = [
    path.resolve(__dirname, "src/components/"),
    "node_modules"
  ];
  return config;
};
