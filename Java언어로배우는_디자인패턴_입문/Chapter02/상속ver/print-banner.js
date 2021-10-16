const Banner = require("./banner");

/**
 * @implements {Print}
 */
class PrintBanner extends Banner {
  constructor(str) {
    super(str);
  }

  printWeak() {
    super.showWithParen();
  }

  printStrong() {
    super.showWithAster();
  }
}

module.exports = PrintBanner;
