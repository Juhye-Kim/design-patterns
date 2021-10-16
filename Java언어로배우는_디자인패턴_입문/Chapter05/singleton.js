class Car {
  constructor(wheels) {
    this._wheels = wheels;
  }

  get wheels() {
    return this._wheels;
  }
}

const Singleton = {
  instance: null,

  getInstance(param) {
    if (!this.instance) this.instance = new Car(param);
    return this.instance;
  },
};

module.exports = Singleton;
