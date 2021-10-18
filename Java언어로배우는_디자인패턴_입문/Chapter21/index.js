const PrinterProxy = require("./printer-proxy");

/**
 * Proxy를 경우해서 Printer를 이용
 */
const p = new PrinterProxy("Jooing");

console.log(`이름은 현재 ${p.printerName} 입니다.`);
p.setPrinterName("John");
console.log(`이름은 현재 ${p.printerName} 입니다.`);
p.print("Hello, world!"); // Print 인스턴스는 이때 생성됨!
