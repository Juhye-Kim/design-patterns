const Singleton = require("./singleton");

console.log("start");

const obj1 = Singleton.getInstance(4); // 유일한 인스턴스 생성시점
const obj2 = Singleton.getInstance(3);

if (obj1 === obj2) {
  console.log("1, 2는 같은 인스턴스입니다.");
  console.log(obj1.wheels, obj2.wheels); // 4 4
} else {
  console.log("1, 2는 다른 인스턴스입니다.");
}

console.log("end");
