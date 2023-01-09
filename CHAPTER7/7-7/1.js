class Person {
  constructor(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  // 3. department 접근자 제거한다.
  // get department() {
  //   return this._department
  // }

  set department(arg) {
    this._department = arg
  }

  // 1. 의존성을 줄이려면 클라이언트가 부서 클래스를 볼 수 없게 숨긴다.
  get manager() {
    return this._department.manager
  }
}

class Department {
  get chargeCode() {
    return this._chargeCode
  }

  set chargeCode(arg) {
    this._chargeCode = arg
  }

  get manager() {
    return this._manager
  }

  set manager(arg) {
    this._manager = arg
  }
}

// 클라이언트
// 클라이언트는 부서 클래스의 작동방식, 즉 department가 manager정보를 제공해야 한다는 사실을 알아야 한다. 그러므로 -> 1.
// 2. 클라이언트가 Person의 Manger 메서드를 쓰게 바꾸고,
// manager = aPerson.department.manager
manager = aPerson.manager
