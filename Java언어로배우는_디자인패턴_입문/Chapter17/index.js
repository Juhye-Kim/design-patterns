const RandomNumberGenerator = require("./random-number-generator");
const DigitObserver = require("./digit-observer");
const GraphObserver = require("./graph-observer");

const generator = new RandomNumberGenerator();
const observer1 = new DigitObserver();
const observer2 = new GraphObserver();

generator.addObserver(observer1);
generator.addObserver(observer2);
generator.execute();
