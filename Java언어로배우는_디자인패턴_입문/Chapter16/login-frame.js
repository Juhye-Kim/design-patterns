const ColleagueButton = require("./colleague-button");
const ColleagueTextField = require("./colleague-text-field");

/**
 * @implements ActionListener, Mediator
 */
class LoginFrame extends Frame {
  /**
   * @param {string} title
   */
  constructor(title) {
    super(title);

    /**
     * @type {ColleagueTextField}
     * @private
     */
    this._textUser;

    /**
     * @type {ColleagueTextField}
     * @private
     */
    this._textPass;

    /**
     * @type {ColleagueButton}
     * @private
     */
    this._buttonOk;

    /**
     * @type {ColleagueButton}
     * @private
     */
    this._buttonCancel;

    this.setBackground("lightgray");
    this.createColleagues();
    this.add(this._textUser);
    this.add(this._textPass);
    this.add(this._buttonOk);
    this.add(this._buttonCancel);

    this.colleagueChanged();
  }

  createColleagues() {
    const textUser = new ColleagueTextField("", 10);
    const textPass = new ColleagueTextField("", 10);

    const buttonOk = new ColleagueButton("OK");
    const buttonCancel = new ColleagueButton("Cancel");

    textUser.setMediator(this);
    textPass.setMediator(this);
    buttonOk.setMediator(this);
    buttonCancel.setMediator(this);
  }

  colleagueChanged() {
    textUser.setColleageEnabled(true);
    textPass.setColleageEnabled(true);
    buttonOk.setColleageEnabled(true);
  }
}

module.exports = LoginFrame;
