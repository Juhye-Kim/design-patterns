const NoSupport = require("./no-support");
const LimitSupport = require("./limit-support");
const SpecialSupport = require("./special-support");
const OddSupport = require("./odd-support");
const Trouble = require("./trouble");

const alice = new NoSupport("Alice");
const bob = new LimitSupport("Bob", 100);
const charlie = new SpecialSupport("Charlie", 429);
const diana = new LimitSupport("Diana", 200);
const elmo = new OddSupport("Elmo");
const fred = new LimitSupport("Fred", 300);

// make chain
alice.setNext(bob).setNext(charlie).setNext(diana).setNext(elmo).setNext(fred);

// trouble shooting
for (let i = 0; i < 500; i += 33) {
  alice.support(new Trouble(i));
}
