const StringDisplay = require("./string-display");
const SideBorder = require("./side-border");
const FullBorder = require("./full-border");

const b1 = new StringDisplay("Hello world");
const b2 = new SideBorder(b1, "#");
const b3 = new FullBorder(b2);

b1.show();
b2.show();
b3.show();

const b4 = new FullBorder(
  new SideBorder(new FullBorder(new SideBorder(b1, "*"), "-"), "/"),
  "|"
);

b4.show();
