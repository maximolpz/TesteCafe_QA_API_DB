import { Selector, t } from "testcafe";
import selector from "../resources/selectors.json";

class LoginPage {
  constructor() {
    this.usernameInput = Selector(selector.login[0].id_input_user);
    this.passwordInput = Selector(selector.login[0].id_input_pass);
    this.loginButton = Selector(selector.login[0].id_button_login);
  }

  async login(username, password) {
    await t
      .typeText(this.usernameInput, username)
      .typeText(this.passwordInput, password)
      .click(this.loginButton);
  }
}

export default new LoginPage();
