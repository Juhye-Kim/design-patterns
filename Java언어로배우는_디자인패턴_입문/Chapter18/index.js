const Gamer = require("./game/gamer");

/**
 * 과일을 모으는 주사위 게임
 * - 주인공은 주사위를 던져 나온수로 다음 상태를 결정
 * - 좋은 수 -> 돈 증가, 나쁜 수 -> 돈 감소, 특별히 좋은 수 -> 과일 받음
 * - 돈이 없어지면 종료
 */

const gamer = new Gamer(100); // 최초 소지금 100

let memento = gamer.createMemento(); // 최초 상태 저장

for (let i = 0; i < 100; i++) {
  console.log(`==== ${i}`);
  console.log(`현재 상태: ${gamer}`);

  gamer.bet(); // game start

  console.log(`소지금은 ${gamer.getMoney()}원이 되었습니다.`);

  // Memento 취급 결정
  if (gamer.getMoney() > memento.getMoney()) {
    console.log(" (많이 증가했으므로 현재 상태를 저장하자)");
    memento = gamer.createMemento();
  } else if (gamer.getMoney() < memento.getMoney() / 2) {
    console.log(" (많이 감소했으므로 이전 상태로 복원하자)");
    gamer.restoreMemento(memento);
  }

  console.log("");
}
