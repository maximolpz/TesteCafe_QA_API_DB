import { Selector } from "testcafe";
import LoginPage from "../pages/LoginPage.js";
const data = require("../resources/sharedState.js");

fixture`Login Suite`.page("./").meta({ runOrder: 1 });

test("Login - validate url & title", async (t) => {
  LoginPage.login(data.cred.user, data.cred.pass);
  await t
    .expect(t.eval(() => window.location.href))
    .contains("inventory")
    .expect(Selector(".title").innerText)
    .eql("Products");
  data.titleName = await Selector(".title").innerText;
});
