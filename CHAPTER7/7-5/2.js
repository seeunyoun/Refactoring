class Person {
  // 3. Person 클래스의 인스턴스를 생성할 때 전화번호 인스턴스도 함께 생성해 저장해둔다.
  constructor() {
    this._telephoneNumber = new TelephoneNumber()
  }

  get name() {
    return this._name
  }

  set name(arg) {
    this._anme = arg
  }

  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber
  }

  get officeAreaCode() {
    return this._telephoneNumber.officeAreaCode
  }

  set officeAreaCode(arg) {
    return (this._telephoneNumber.officeAreaCode = arg)
  }

  get officeNumber() {
    return this._telephoneNumber._officeNumber
  }

  set officeNumber(arg) {
    this._telephoneNumber._officeNumber = arg
  }
}

// 1, 2. 전화번호 관련 동작을 별도 클래스로 뽑는다.
class TelephoneNumber {
  get officeAreaCode() {
    return this._officeAreaCode
  }

  set officeAreaCode(arg) {
    this._officeAreaCode = arg
  }

  // 4. 다른 필드들을 하나씩 새 클래스로 옮긴다.
  get officeNumber() {
    return this._officeNumber
  }

  // 4. 다른 필드들을 하나씩 새 클래스로 옮긴다.
  set officeNumber(arg) {
    this._officeNumber = arg
  }

  // 5. 이어서 telephoneNumber 메서드도 옮긴다.
  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`
  }
}
