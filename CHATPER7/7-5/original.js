class Person {
  get name() {
    return this._name
  }

  set name(arg) {
    this._anme = arg
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`
  }

  get officeAreaCode() {
    return this._officeAreaCode
  }

  set officeAreaCode(arg) {
    return (this._officeAreaCode = arg)
  }

  get officeNumber() {
    return this._officeNumber
  }

  set officeNumber(arg) {
    this._officeNumber = arg
  }
}
