const Display = require("./display");
const CountDisplay = require("./count-display");
const RandomCountDisplay = require("./random-display");
const StringDisplayImpl = require("./string-display-impl");

const d1 = new Display(new StringDisplayImpl("Hello, Korea!"));
const d2 = new CountDisplay(new StringDisplayImpl("Hello, World!"));
const d3 = new CountDisplay(new StringDisplayImpl("Hello, Universe!"));
const d4 = new RandomCountDisplay(new StringDisplayImpl("Hello, Jooing"));

d1.display();
d2.display();
d3.display();
d3.multiDisplay(5);
d4.randomCountDisplay();
