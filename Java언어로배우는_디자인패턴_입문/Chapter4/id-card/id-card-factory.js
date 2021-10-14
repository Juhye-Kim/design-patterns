const { Factory } = require("../framework");
const IDCard = require("./id-card");

class IDCardFactory extends Factory {
  constructor() {
    super();

    /**
     * @type {string[]}
     * @private
     */
    this._owners = [];
  }

  /**
   *
   * @param {string} owner
   * @returns {IDCard}
   */
  createProduct(owner) {
    return new IDCard(owner);
  }

  registerProduct(product) {
    this._owners.push(product.owner);
  }

  get owners() {
    return this._owners;
  }
}

module.exports = IDCardFactory;
