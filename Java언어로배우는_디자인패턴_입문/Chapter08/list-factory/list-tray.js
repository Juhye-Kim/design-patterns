const Tray = require("../factory/tray");

class ListTray extends Tray {
  /**
   * @param {string} caption
   */
  constructor(caption) {
    super(caption);
  }

  /**
   * @override
   * @returns {string} html
   */
  makeHTML() {
    let html = `<li>\n${this.caption}<ul>`;

    this.tray.forEach((item) => {
      html += item.makeHTML();
    });

    html += `</ul></li>`;

    return html;
  }
}

module.exports = ListTray;
