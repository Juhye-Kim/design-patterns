const Page = require("../factory/page");

class TablePage extends Page {
  /**
   * @param {string} title
   * @param {string} author
   */
  constructor(title, author) {
    super(title, author);
  }

  /**
   * @override
   * @returns html
   */
  makeHTML() {
    let html = `<html><head><title>${this.title}</title></head>\n<body>\n<h1>${this.title}</h1>\n<table>\n`;

    this.content.forEach((item) => {
      html += `<tr>${item.makeHTML()}</tr>`;
    });

    html += `</table>\n<hr><address>${this.author}</address></body></html>\n`;

    return html;
  }
}

module.exports = TablePage;
