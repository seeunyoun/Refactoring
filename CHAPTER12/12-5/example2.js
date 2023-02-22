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

  get type() {
    return this._type;
  }

  set type(arg) {
    this._type = arg;
  }

  get capitalizedType() {
    return (
      this._type.charAt(0).toUpperCase() + this._type.substr(1).toLowerCase()
    );
  }

  toString() {
    return `${this.name} (${this.capitalizedType})`;
  }
}

// -----------------------------------------------------------------------------------------------------
// [간접 상속할 때]

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

  // 2. getter 추가
  get typeString() {
    return this._type.toString();
  }

  get type() {
    return this._type;
  }

  set type(arg) {
    this._type = arg;
  }

  // 2. getter로 변경!
  get capitalizedType() {
    return (
      this.typeString.charAt(0).toUpperCase() +
      this.typeString.substr(1).toLowerCase()
    );
  }

  toString() {
    return `${this.name} (${this.capitalizedType})`;
  }
}

// 1. 타입 코드를 객체로 바꾸기
class EmployeeType {
  constructor(aString) {
    this._value = aString;
  }

  toString() {
    return this._value;
  }
}

// -----------------------------------------------------------------------------------------------------
// [간접 상속할 때]

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

  // 2. getter 추가
  get typeString() {
    return this._type.toString();
  }

  get type() {
    return this._type;
  }

  // 4. setter도 수정한다.
  set type(arg) {
    this._type = Employee.createEmployeeType(arg);
  }

  // 3. 직원 유형을 예시1과 같이 리팩터링한다.
  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer": {
        return new Engineer();
      }
      case "manager": {
        return new Manager();
      }
      case "salesperson": {
        return new Salesperson();
      }
      default: {
        throw new Error(`${aString}라는 직원 유형은 없습니다.`);
      }
    }
  }

  // 2. getter로 변경!
  get capitalizedType() {
    return (
      this.typeString.charAt(0).toUpperCase() +
      this.typeString.substr(1).toLowerCase()
    );
  }

  toString() {
    return `${this.name} (${this.capitalizedType})`;
  }
}

// 1. 타입 코드를 객체로 바꾸기
class EmployeeType {
  //   constructor(aString) {
  //     this._value = aString;
  //   }
  //   toString() {
  //     return this._value;
  //   }
}

// 3. 직원 유형을 예시1과 같이 리팩터링한다.
class Engineer extends EmployeeType {
  toString() {
    return "engineer";
  }
}
class Manager extends EmployeeType {
  toString() {
    return "manager";
  }
}
class Salesperson extends EmployeeType {
  toString() {
    return "salesperson";
  }
}
