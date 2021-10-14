const Tray = require("../factory/tray");

class TableTray extends Tray {
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
    let html = `<td><table width="100%" border="1><tr><td><b>\n${this.caption}</b></td>`;

    this.tray.forEach((item) => {
      html += item.makeHTML();
    });

    html += `</tr><tr>`;

    const it = this.tray.iterator();
    while (it.hasNext()) {
      item = it.next();
      html += item.makeHTML();
    }
    html += "</tr></table></td>";

    return html;
  }
}

module.exports = TableTray;
