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
