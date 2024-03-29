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

// -----------------------------------------------------------------------------
// [직접 상속할 때]

class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    // 5. 모든 유형에 적용했다면, 타입 코드 필드를 제거한다.
    // this._type = type;
  }

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg)) {
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
  }

  // 1. type 코드를 자가 캡슐화한다.
  // 6. 모든 유형에 적용했다면 슈퍼클래스의 게터 메서드를 제거한다.
  //   get type() {
  //     return this._type;
  //   }

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
class Manager extends Employee {
  get type() {
    return "manager";
  }
}
class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

// 3. 생성자를 팩터리 함수로 바꿔서 선택 로직을 담을 별도 장소를 마련한다.
function createEmployee(name, type) {
  // 4. 새로 만든 서브클래스를 사용하기 위한 선택 로직을 팩터리에 추가한다.
  switch (type) {
    case "engineer": {
      return new Engineer(name, type);
    }
    case "manager": {
      return new Manager(name, type);
    }
    case "salesperson": {
      return new Salesperson(name, type);
    }
  }
  return new Employee(name, type);
}

// -----------------------------------------------------------------------------
// [직접 상속할 때]

class Employee {
  constructor(name, type) {
    // 7. 테스트 완료 후 검증 로직도 제거한다.
    //   this.validateType(type);
    this._name = name;
    // 5. 모든 유형에 적용했다면, 타입 코드 필드를 제거한다.
    // this._type = type;
  }

  // 7. 테스트 완료 후 검증 로직도 제거한다.
  //   validateType(arg) {
  //     if (!["engineer", "manager", "salesperson"].includes(arg)) {
  //       throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  //     }
  //   }

  // 1. type 코드를 자가 캡슐화한다.
  // 6. 모든 유형에 적용했다면 슈퍼클래스의 게터 메서드를 제거한다.
  //   get type() {
  //     return this._type;
  //   }

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
class Manager extends Employee {
  get type() {
    return "manager";
  }
}
class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

// 3. 생성자를 팩터리 함수로 바꿔서 선택 로직을 담을 별도 장소를 마련한다.
function createEmployee(name, type) {
  // 4. 새로 만든 서브클래스를 사용하기 위한 선택 로직을 팩터리에 추가한다.
  switch (type) {
    case "engineer": {
      return new Engineer(name, type);
    }
    case "manager": {
      return new Manager(name, type);
    }
    case "salesperson": {
      return new Salesperson(name, type);
    }
    // 8. switch문에 default 추가
    default: {
      throw new Error(`${type}이라는 직원 유형은 없습니다.`);
    }
  }
  //   return new Employee(name, type);
}

// -----------------------------------------------------------------------------
// [직접 상속할 때]

class Employee {
  // 9. 마지막으로 생성자에 type을 넘길 필요가 없으므로 type 인수를 제거한다.
  constructor(name) {
    this._name = name;
  }

  toString() {
    return `${this.name} (${this.type})`;
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}
class Manager extends Employee {
  get type() {
    return "manager";
  }
}
class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

function createEmployee(name, type) {
  switch (type) {
    // 9. type 인수를 제거한다.
    case "engineer": {
      return new Engineer(name);
    }
    case "manager": {
      return new Manager(name);
    }
    case "salesperson": {
      return new Salesperson(name);
    }
    default: {
      throw new Error(`${type}이라는 직원 유형은 없습니다.`);
    }
  }
}
