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
    return this._telephoneNumber.toString()
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode
  }

  set officeAreaCode(arg) {
    return (this._telephoneNumber.areaCode = arg)
  }

  get officeNumber() {
    return this._telephoneNumber.number
  }

  set officeNumber(arg) {
    this._telephoneNumber.number = arg
  }
}

// 1, 2. 전화번호 관련 동작을 별도 클래스로 뽑는다.
class TelephoneNumber {
  // 6. office 란 단어는 불필요하다. 메서드들의 이름을 바꿔준다.
  get areaCode() {
    return this._areaCode
  }

  set areaCode(arg) {
    this._areaCode = arg
  }

  // 4. 다른 필드들을 하나씩 새 클래스로 옮긴다.
  get number() {
    return this._number
  }

  // 4. 다른 필드들을 하나씩 새 클래스로 옮긴다.
  set number(arg) {
    this._number = arg
  }

  // 5. 이어서 telephoneNumber 메서드도 옮긴다.
  // 6. 이름을 새로운 환경에 맞게 바꾼다.
  toString() {
    return `(${this.areaCode}) ${this.number}`
  }
}

// 7. 전화번호는 여러모로 쓸모가 많으니 이 클래스는 클라이언트에게 공개하는 것이 좋다.
// "office"로 시작하는 메서드를 없애고 TelephoneNumber의 접근자를 바로 사용하도록 바꿀 수 있다.
// 그런데 기왕 그렇게 쓸거라면 전화번호를 값 객체로 나으니 "참조를 값으로 바꾸기" 리팩터링을 적용해야 한다 -> 9.4절에서 계속...