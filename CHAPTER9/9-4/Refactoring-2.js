// 기존 Person 클래스 -> TelephoneNumber 클래스로 추출하는 것!
class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber()
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode
  }

  // 2. 필드들의 세터들만 제거하면 된다.
  set officeAreaCode(arg) {
    // this._telephoneNumber.areaCode = arg
    this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber)
  }

  get officeNumber() {
    return this._telephoneNumber.number
  }

  // 2. 필드들의 세터들만 제거하면 된다.
  set officeNumber(arg) {
    // this._telephoneNumber.number = arg
    this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg)
  }
}

class TelephoneNumber {
  // 1. 가장 먼저 할 일은 전화번호를 불변으로 만들기다.
  constructor(areaCode, number) {
    this._areaCode = areaCode
    this._number = number
  }

  get areaCode() {
    return this._areaCode
  }

  set areaCode(arg) {
    this._areaCode = arg
  }

  get number() {
    return this._number
  }

  set number(arg) {
    this._number = arg
  }

  // 3. 동치성 비교 메서드를 만든다.
  equals(other) {
    if (!(other instanceof TelephoneNumber)) {
      return false
    }
    return this.areaCode === other.areaCode && this.number === other.number
  }
}
