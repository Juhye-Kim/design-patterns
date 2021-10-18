const ProgramNode = require("./program-node");
const Context = require("./context");

const texts = [
  "program end",
  "program go end",
  "program go right go right go right go right end",
  "program repeat 4 repeat 3 go right go left end right end end",
];

texts.forEach((text) => {
  const node = new ProgramNode();
  node.parse(new Context(text));

  console.log(`text = ${text}`);
  console.log(`node = ${node}`);
});
