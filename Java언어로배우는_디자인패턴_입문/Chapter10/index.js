const Player = require("./player");
const WinningStrategy = require("./winning-strategy");
const ProbStrategy = require("./prob-strategy");

const player1 = new Player("나", new WinningStrategy());
const player2 = new Player("너", new ProbStrategy());

for (let i = 0; i < 10000; i++) {
  const nextHand1 = player1.nextHand();
  const nextHand2 = player2.nextHand();

  if (nextHand1.isStrongerThan(nextHand2)) {
    console.log(`Winner: ${player1}`);
    player1.win();
    player2.lose();
  } else if (nextHand2.isStrongerThan(nextHand1)) {
    console.log(`Winner: ${player2}`);
    player1.lose();
    player2.win();
  } else {
    console.log("Even...");
    player1.even();
    player2.even();
  }
}

console.log("Total result:");
console.log(player1.toString());
console.log(player2.toString());
