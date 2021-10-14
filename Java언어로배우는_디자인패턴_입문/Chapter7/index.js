const TextBuilder = require("./text-builder");
const HTMLBuilder = require("./html-builder");
const Director = require("./director");

const textBuilder = new TextBuilder();
const director1 = new Director(textBuilder);

director1.construct();
const result1 = textBuilder.result;
console.log(result1);

const htmlBuilder = new HTMLBuilder();
const director2 = new Director(htmlBuilder);
director2.construct();
const result2 = htmlBuilder.result;
console.log(result2);
