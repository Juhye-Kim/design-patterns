const IDCardFactory = require("./id-card-factory");

const factory = new IDCardFactory();

const card1 = factory.create("나");
const card2 = factory.create("너");
const card3 = factory.create("우리");

card1.use();
card2.use();
card3.use();
