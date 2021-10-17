/**
 * 주인공의 상태를 표현하는 클래스
 * - game 패키지 외부에서는 Memento 내부 변경 불가
 */
class Memento {
  /**
   * wide interface
   * @param {number} money
   */
  constructor(money) {
    /**
     * 현재 소지금
     * @type {number}
     */
    this.money = money;

    /**
     * 현재 소지 과일
     * @type {string[]}
     */
    this.fruits = [];
  }

  /**
   * narrow interface
   * @return {number}
   */
  getMoney() {
    return this.money;
  }

  /**
   * wide interface
   * @param {string} fruit
   */
  addFruit(fruit) {
    this.fruits.push(fruit);
  }

  /**
   * wide interface
   * @return {string[]}
   */
  getFruits() {
    return [...this.fruits];
  }
}

module.exports = Memento;
