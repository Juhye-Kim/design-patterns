const files = require("./files");

/**
 * DB이름을 지정하고, 대응하는 속성을 작성하는 클래스
 */
class Database {
  /**
   * @param {string} dbname
   */
  static getProperties(dbname) {
    const filename = dbname + ".txt";

    if (files[filename]) {
      return files[filename];
    }
    console.log(`Warning: ${filename} is not found.`);
  }
}

module.exports = Database;
