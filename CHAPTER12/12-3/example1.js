class Party {}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super()
    this._id = id
    this._name = name
    this._monthlyCost = monthlyCost
  }
  // 생략
}

class Department extends Party {
  constructor(name, staff) {
    super()
    this._name = name
    this._staff = staff
  }
  // 생략
}

// --------------------------------------------------------

class Party {
  // 1. name 공통 코드를 슈퍼클래스로 옮긴다.
  constructor(name) {
    this._name = name
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    // 2. 슈퍼클래스 생성자에 매개변수로 name을 넘긴다.
    super(name)
    this._id = id
    this._monthlyCost = monthlyCost
  }
  // 생략
}

class Department extends Party {
  constructor(name, staff) {
    super(name)
    this._staff = staff
  }
  // 생략
}
