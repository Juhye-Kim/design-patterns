const Directory = require("./directory");
const File = require("./file");
const ListVisitor = require("./list-visitor");

console.log("Making root entries...");

const rootDir = new Directory("root");
const binDir = new Directory("bin");
const tmpDir = new Directory("tmp");
const usrDir = new Directory("usr");

rootDir.add(binDir);
rootDir.add(tmpDir);
rootDir.add(usrDir);
binDir.add(new File("index.html", 1000));
binDir.add(new File("app.js", 2000));
rootDir.accept(new ListVisitor());

console.log("\nMaking user entries...");

const kim = new Directory("kim");
const lee = new Directory("lee");
const park = new Directory("park");

usrDir.add(kim);
usrDir.add(lee);
usrDir.add(park);
kim.add(new File("diary.html", 100));
kim.add(new File("composite.js", 200));
lee.add(new File("memo.txt", 300));
park.add(new File("junk.mail", 400));

rootDir.accept(new ListVisitor());
