/**
 * @extends Button
 * @implements Colleague
 */
class ColleagueButton extends Button {
  /**
   * @param {string} caption
   */
  constructor(caption) {
    super(caption);

    this._mediator;
  }

  /**
   * @param {Mediator} mediator
   */
  setMediator(mediator) {
    this._mediator = mediator;
  }

  /**
   * @param {boolean} enabled
   */
  setColleagueEnabled(enabled) {
    this.setEnabled(enabled);
  }
}

module.exports = ColleagueButton;
