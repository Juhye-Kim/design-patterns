/**
 * @abstract
 */
class Factory {
  /**
   * 템플릿 메서드 패턴으로 구현됨
   * @public
   * @final
   * @param {string} owner
   * @returns {Product}
   */
  create(owner) {
    const p = this.createProduct(owner);

    this.registerProduct(p);

    return p;
  }

  /**
   * 인스턴스를 실제로 생성하는 대신, 생성을 위한 메서드를 구현
   * - 생성할 구체적인 클래스명은 하위 클래스가 하도록!
   * @abstract
   * @protected
   * @param {string} owner
   * @returns {Product}
   */
  createProduct(owner) {}

  /**
   * @abstract
   * @protected
   */
  registerProduct() {}
}

module.exports = Factory;
