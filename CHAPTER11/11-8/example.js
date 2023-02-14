class Employee {
  constructor(name, typeCode) {
    this._name = name
    this._typeCode = typeCode
  }

  get name() {
    return this._name
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode]
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesperson' }
  }
}

// 호출자
candidate = new Employee(document.name, document.empType)
const leadEngineer = new Employee(document.leadEngineer, 'E')

// -----------------------------------------------------------------------

class Employee {
  constructor(name, typeCode) {
    this._name = name
    this._typeCode = typeCode
  }

  get name() {
    return this._name
  }

  get type() {
    return Employee.legalTypeCodes[this._typeCode]
  }

  static get legalTypeCodes() {
    return { E: 'Engineer', M: 'Manager', S: 'Salesperson' }
  }
}

// 1. 팩터리 함수를 만든다.
function createEmployee(name, typeCode) {
  return new Employee(name, typeCode)
}

// 3. 직원 유형을 팩터리 함수의 이름에 녹이는 방식을 사용하자.
function createEngineer(name) {
  return new Employee(name, 'E')
}

// 호출자
// 2. 생성자 대신 팩터리 함수를 쓰게 한다.
// candidate = new Employee(document.name, document.empType)
candidate = createEmployee(document.name, document.empType)
// 4. 생성자 대신 팩터리 함수를 호출한다.
// const leadEngineer = new Employee(document.leadEngineer, 'E')
const leadEngineer = createEngineer(document.leadEngineer)
