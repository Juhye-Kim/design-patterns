const Directory = require("./directory");
const File = require("./file");

console.log("Making root entries...");

const rootdir = new Directory("root");
const bindir = new Directory("bin");
const tmpdir = new Directory("tmp");
const usrdir = new Directory("usr");

rootdir.add(bindir);
rootdir.add(tmpdir);
rootdir.add(usrdir);
bindir.add(new File("vi", 10000));
bindir.add(new File("latex", 20000));
rootdir.printList();

console.log("\nMaking user entries...");

const kim = new Directory("kim");
const lee = new Directory("lee");
const park = new Directory("park");

usrdir.add(kim);
usrdir.add(lee);
usrdir.add(park);
kim.add(new File("diary.js", 100));
kim.add(new File("composite.js", 200));
lee.add(new File("memo.txt", 300));
park.add(new File("game.docx", 400));
park.add(new File("junk.mail", 500));
rootdir.printList();
