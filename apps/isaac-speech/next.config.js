const withTM = require("next-transpile-modules")(["ui", "session", "types"]);

module.exports = withTM({
  reactStrictMode: true,
});

