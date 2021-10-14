const Factory = require("./factory/factory");

const factory = Factory.getFactory("list-factory");

const naver = factory.createLink("NAVER", "https://www.naver.com");
const google = factory.createLink("Google", "https://www.google.com");

const traysearch = factory.createTray("검색엔진");
traysearch.add(naver);
traysearch.add(google);

const facebook = factory.createLink("Facebook", "https://www.facebook.com");
const instagram = factory.createLink("Instagram", "https://www.instagram.com");

const traysns = factory.createTray("SNS");
traysns.add(facebook);
traysns.add(instagram);

const page = factory.createPage("web sites", "jooing");
page.add(traysearch);
page.add(traysns);
page.output();
