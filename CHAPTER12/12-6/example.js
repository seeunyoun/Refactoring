class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return "X";
  }
}

class Male extends Person {
  get genderCode() {
    return "Y";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

//  ------------------------------------------------

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return "X";
  }
}

class Male extends Person {
  get genderCode() {
    return "Y";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

// 1. 팩터리 함수를 생성한다.
function createPerson(aRecord) {
  let p;
  switch (aRecord.gender) {
    case "M": {
      p = new Male(aRecord.name);
      break;
    }
    case "F": {
      p = new Female(aRecord.name);
      break;
    }
    default: {
      p = new Person(aRecord.name);
    }
  }
  return p;
}

function loadFromInput(data) {
  const result = [];
  data.forEach((aRecord) => {
    result.push(createPerson(aRecord));
  });
  return result;
}

//  ------------------------------------------------

class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return "X";
  }
}

class Male extends Person {
  get genderCode() {
    return "Y";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

// 1. 팩터리 함수를 생성한다.
// 2. 변수 p를 인라인 한다.
function createPerson(aRecord) {
  switch (aRecord.gender) {
    case "M": {
      return new Male(aRecord.name);
    }
    case "F": {
      return new Female(aRecord.name);
    }
    default: {
      return new Person(aRecord.name);
    }
  }
}

// 2. 반복문을 파이프라인으로 바꾼다.
function loadFromInput(data) {
  //   const result = [];
  //   data.forEach((aRecord) => {
  //     result.push(createPerson(aRecord));
  //   });
  //   return result;
  return data.map((aRecord) => createPerson(aRecord));
}

// [클라이언트]
// 3. instanceof 대신 타입 검사 코드를 함수로 추출한다.
function isMale(aPerson) {
  return aPerson instanceof Male;
}
// const numberOfMales = people.filter((p) => p instanceof Male).length;
// const numberOfMales = people.filter((p) => isMale(p)).length;

//  ------------------------------------------------

class Person {
  // 6. 생성자에서 매개변수로 받아 설정하도록 한다.
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }

  // 5. genderCode 필드를 추가하고,
  get genderCode() {
    return this._genderCode;
  }

  get name() {
    return this._name;
  }

  get genderCode() {
    return "X";
  }

  // 4. 추출한 함수를 Person으로 옮긴다.
  // 7. 남성인 경우의 로직을 슈퍼클래스로 옮긴다.
  get isMale() {
    // return this instanceof Male;
    return "M" === this._genderCode;
  }

  get isFemale() {
    // return this instanceof Male;
    return "F" === this._genderCode;
  }
}

class Male extends Person {
  get genderCode() {
    return "Y";
  }
}

class Female extends Person {
  get genderCode() {
    return "F";
  }
}

// 1. 팩터리 함수를 생성한다.
// 2. 변수 p를 인라인 한다.
function createPerson(aRecord) {
  switch (aRecord.gender) {
    // 7. 남성인 경우의 로직을 슈퍼클래스로 옮긴다.
    case "M": {
      //   return new Male(aRecord.name);
      return new Person(aRecord.name, "M");
    }
    // 8. 여성의 경우도 동일하게 진행한다.
    case "F": {
      // return new Female(aRecord.name);
      return new Person(aRecord.name, "F");
    }
    default: {
      return new Person(aRecord.name);
    }
  }
}

// 2. 반복문을 파이프라인으로 바꾼다.
function loadFromInput(data) {
  //   const result = [];
  //   data.forEach((aRecord) => {
  //     result.push(createPerson(aRecord));
  //   });
  //   return result;
  return data.map((aRecord) => createPerson(aRecord));
}

// [클라이언트]
// 3. instanceof 대신 타입 검사 코드를 함수로 추출한다.
// function isMale(aPerson) {
//   return aPerson instanceof Male;
// }

// const numberOfMales = people.filter((p) => p instanceof Male).length;
const numberOfMales = people.filter((p) => p.isMale).length;
