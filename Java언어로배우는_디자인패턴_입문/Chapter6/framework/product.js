/**
 * @interface
 */
class Product {
  /**
   * @public
   * @abstract
   * @param {string} s
   */
  use(s) {}

  /**
   * 인스턴스 복제하는 메서드
   * @public
   * @abstract
   * @returns {Product}
   */
  createClone() {}
}

module.exports = Product;
