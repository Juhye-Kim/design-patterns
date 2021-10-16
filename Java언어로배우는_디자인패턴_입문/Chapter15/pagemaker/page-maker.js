const Database = require("./database");
const HtmlWriter = require("./html-writer");

/**
 * 웹 페이지를 작성하는 클래슨
 */
class PageMaker {
  /**
   * @param {string} mailaddr
   * @param {string} filename
   */
  static makeWelcomePage(mailaddr, filename) {
    const mailprop = Database.getProperties("maildata");
    const username = mailprop[mailaddr];
    const writer = new HtmlWriter();

    writer.title(`Welcome to ${username}'s page!`);
    writer.paragraph(`${username}의 페이지에 오신 걸 환영합니다.`);
    writer.paragraph("메일을 기다리고 있습니다.");
    writer.mailto(mailaddr, username);
    writer.close();

    console.log(`${filename} is created for ${mailaddr} (${username})`);
  }
}

module.exports = PageMaker;
