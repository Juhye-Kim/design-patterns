const Memento = require("./memento");

/**
 * 게임을 실행하는 주인공
 */
class Gamer {
  /**
   * @param {number} money
   */
  constructor(money) {
    /**
     * 소지금
     * @type {number}
     * @private
     */
    this._money = money;

    /**
     * 소지 과일
     * @type {string[]}
     * @private
     */
    this._fruits = [];
  }

  /**
   * @return {number}
   */
  getMoney() {
    return this._money;
  }

  /**
   * 주사위에서 나온 수에 따라 소지금, 과일 수를 변화시킴
   * (단, 파산하지 않는 한)
   */
  bet() {
    const dice = parseInt(Math.random() * 6) + 1;

    if (dice === 1) {
      this._money += 100;
      console.log("소지금이 증가했습니다.");
    } else if (dice === 2) {
      this._money /= 2;
      console.log("소지금이 절반이 되었습니다..");
    } else if (dice === 6) {
      const f = this._getFruit();
      console.log(`과일(${f})을 받았습니다.`);
      this._fruits.push(f);
    } else {
      console.log("변한 것이 없습니다.");
    }
  }

  /**
   * snapshot (현재상태 저장)
   * - 과일은 '맛있는' 것만 저장
   * @returns {Memento}
   */
  createMemento() {
    const m = new Memento(this._money);

    this._fruits.forEach((f) => f.startsWith("맛있는") && m.addFruit(f));

    return m;
  }

  /**
   * undo (상태 복원)
   * @param {Memento} memento
   */
  restoreMemento(memento) {
    this._money = memento.money;
    this._fruits = memento.getFruits();
  }

  /**
   * @return {string}
   */
  toString() {
    return `[money = ${this._money}, fruits = ${this._fruits}]`;
  }

  /**
   * @private
   * @returns {string}
   */
  _getFruit() {
    let prefix = "";

    if (Math.random() > 0.5) prefix = "맛있는";

    return `${prefix} ${
      Gamer.fruitsname[parseInt(Math.random() * Gamer.fruitsname.length)]
    }`;
  }
}

Gamer.fruitsname = ["망고", "레몬", "바나나", "파인애플"];

module.exports = Gamer;
