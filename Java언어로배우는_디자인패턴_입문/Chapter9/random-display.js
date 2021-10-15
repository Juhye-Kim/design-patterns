const CountDisplay = require("./count-display");

class RandomCountDisplay extends CountDisplay {
  randomCountDisplay() {
    const randomNumber = Math.random() * 10;
    this.multiDisplay(randomNumber);
  }
}

module.exports = RandomCountDisplay;
