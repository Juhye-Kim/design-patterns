const CharDisplay = require("./char-display");
const StringDisplay = require("./string-display");

/**
 * 문자나 문자열을 5회 반복해서 표시하는 프로그램
 *
 * AbstractDisplay: display()만 구현하는 추상 클래스
 * CharDisplay: open(), print(), close() 구현하는 클래스
 * StringDisplay: open(), print(), close() 구현하는 클래스
 * */

const d1 = new CharDisplay("H");
const d2 = new StringDisplay("Hello");
const d3 = new StringDisplay("안녕");

d1.display();
d2.display();
d3.display();
