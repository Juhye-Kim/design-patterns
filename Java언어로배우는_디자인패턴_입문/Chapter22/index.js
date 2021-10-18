const DrawCanvas = require("./draw-canvas");
const DrawCommand = require("./draw-command");
const MacroCommand = require("./macro-command");

const history = new MacroCommand();
const canvas = new DrawCanvas(400, 400, history);

const cmd1 = new DrawCommand(canvas, { x: 10, y: 20 });
history.append(cmd1);
cmd1.execute();

const cmd2 = new DrawCommand(canvas, { x: 30, y: 40 });
history.append(cmd2);
cmd2.execute();

const cmd3 = new DrawCommand(canvas, { x: 50, y: 60 });
history.append(cmd3);
cmd3.execute();

console.log("\n[지금까지의 모든 명령을 재실행합니다]");
history.execute();

console.log("\n[가장 최근 명령을 목록에서 제거합니다]");
history.undo();
history.execute();

console.log("\n[모든 명령을 초기화합니다]");
history.clear();
history.execute();
