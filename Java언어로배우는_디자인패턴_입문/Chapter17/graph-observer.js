/**
 * 관찰한 숫자를 '간이 그래프'로 표현
 * @implements Observer
 */
class GraphObserver {
  /**
   * @param {NumberGenerator} generator
   */
  update(generator) {
    const count = generator.num;

    console.log(`Graph observer: ${"*".repeat(count)}`);
  }
}

module.exports = GraphObserver;
