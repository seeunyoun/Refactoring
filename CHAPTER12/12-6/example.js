class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return "X";
  }
}

class Male extends Person {
  get genderCode() {
    return "Y";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}
