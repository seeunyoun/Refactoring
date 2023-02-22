class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }

  toString() {
    return `${this.name} (${this._type})`;
  }
}

// -----------------------------------------------------------------------------
// [직접 상속할 때]

class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }

  // 1. type 코드를 자가 캡슐화한다.
  get type() {
    return this._type;
  }

  toString() {
    return `${this.name} (${this.type})`;
  }
}

// 2. 직접 상속 방식으로, 직원 클래스를 서브클래싱한다.
class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

// 3. 생성자를 팩터리 함수로 바꿔서 선택 로직을 담을 별도 장소를 마련한다.
function createEmployee(name, type) {
  return new Employee(name, type);
}
