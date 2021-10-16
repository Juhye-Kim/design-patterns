const Banner = require("./banner");
const Print = require("./print");

class PrintBanner extends Print {
  constructor(str) {
    super(str);

    /**
     * @type {Banner}
     * @private
     */
    this._banner = new Banner(str);
  }

  printWeak() {
    this._banner.showWithParen();
  }

  printStrong() {
    this._banner.showWithAster();
  }
}

module.exports = PrintBanner;
