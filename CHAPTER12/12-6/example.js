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
const numberOfMales = people.filter((p) => isMale(p)).length;
