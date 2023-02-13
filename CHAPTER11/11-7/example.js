class Person {
  get name() {
    return this._name
  }

  set name(arg) {
    this._name = arg
  }

  get id() {
    return this._id
  }

  set id(arg) {
    this._id = arg
  }
}

// 사람 객체 하나를 생성해보자.
const martin = new Person()
martin.name = 'martin'
margin.id = '1234'
