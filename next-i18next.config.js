const path = require('path');

module.exports = {
  i18n: {
    locales: ["en", "es"],
    defaultLocale: 'en',
    localeDetection: true,
    localePath: path.resolve("./public/locales"),
  },
};