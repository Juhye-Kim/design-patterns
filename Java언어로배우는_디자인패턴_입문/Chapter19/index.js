const SafeFrame = require("./safe-frame");

/**
 * 금고 경비 시스템
 */
const frame = new SafeFrame("state1");

const actions = ["buttonUse", "buttonAlarm", "buttonPhone"];

for (let hour = 0; hour < 24; hour++) {
  frame.setClock(hour);
  frame.actionPerformed(actions[parseInt(Math.random() * 3)]);
}
