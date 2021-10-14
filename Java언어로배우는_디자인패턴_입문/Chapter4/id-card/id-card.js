const { Product } = require("../framework");

class IDCard extends Product {
  constructor(owner) {
    super();

    /**
     * @type {string}
     * @private
     */
    this._owner = owner;

    console.log(`${this._owner}의 카드를 만듭니다.`);
  }

  use() {
    console.log(`${this._owner}의 카드를 사용합니다.`);
  }

  get owner() {
    return this._owner;
  }
}

module.exports = IDCard;
