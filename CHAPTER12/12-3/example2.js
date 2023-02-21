class Employee {
  constructor(name) {}

  get isPrivileged() {}

  assignCar() {}
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name)
    this._grade = grade
    if (this.isPrivileged) {
      return this.assignCar() // 모든 서브클래스가 수행한다.
    }
  }

  get isPrivileged() {
    return this._grade > 4
  }
}

// ---------------------------------------------------------------

class Employee {
  constructor(name) {}

  get isPrivileged() {}

  assignCar() {}
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name)
    this._grade = grade
    // if (this.isPrivileged) {
    //   return this.assignCar() // 모든 서브클래스가 수행한다.
    // }

    // 1. 공통 코드를 함수로 출력한다.
    this.finishConstruction()
  }

  // 1. 공통 코드를 함수로 출력한다.
  finishConstruction() {
    if (this.isPrivileged) {
      return this.assignCar()
    }
  }

  get isPrivileged() {
    return this._grade > 4
  }
}

// ---------------------------------------------------------------

class Employee {
  constructor(name) {}

  get isPrivileged() {}

  assignCar() {}

  // 2. 추출한 메서드를 슈퍼클래스로 옮긴다.
  finishConstruction() {
    if (this.isPrivileged) {
      return this.assignCar()
    }
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name)
    this._grade = grade
    // if (this.isPrivileged) {
    //   return this.assignCar() // 모든 서브클래스가 수행한다.
    // }

    // 1. 공통 코드를 함수로 출력한다.
    this.finishConstruction()
  }

  // 1. 공통 코드를 함수로 출력한다.
  // finishConstruction() {
  //   if (this.isPrivileged) {
  //     return this.assignCar()
  //   }
  // }

  get isPrivileged() {
    return this._grade > 4
  }
}
