/**
 * @extends TextField
 * @implements TextListener, Colleague
 */
class ColleagueTextField extends TextField {
  /**
   *
   * @param {string} text
   * @param {number} columns
   */
  constructor(text, columns) {
    super(text, columns);

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
    this.setBackground(enabled ? "white" : "lightgray");
  }

  /**
   * 문자열 변화를 Mediator에게 통지
   * @param {TextEvent} e
   */
  textValueChanged(e) {
    this._mediator.colleagueChanged();
  }
}

module.exports = ColleagueTextField;
