const Manager = require("./framework/manager");
const MessageBox = require("./message-box");
const UnderlinePen = require("./underline-pen");

const manager = new Manager();
const upen = new UnderlinePen("~");
const mbox = new MessageBox("*");
const sbox = new MessageBox("/");

manager.register("strong message", upen);
manager.register("warning box", mbox);
manager.register("slash box", sbox);

const p1 = manager.create("strong message");
p1.use("hello");
const p2 = manager.create("warning box");
p2.use("hello");
const p3 = manager.create("slash box");
p3.use("hello");
