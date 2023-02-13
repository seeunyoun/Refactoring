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

// -------------------------------------------------

class Person {
  // 1. 생성자에서 id를 받도록한다. '함수 선언 바꾸기' 리팩터링.
  constructor(id) {
    this.id = id
  }

  get name() {
    return this._name
  }

  set name(arg) {
    this._name = arg
  }

  get id() {
    return this._id
  }

  // 4. 세터 메서드를 인라인한다.
  // set id(arg) {
  //   this._id = arg
  // }
}

// 사람 객체 하나를 생성해보자.
// 2. 생성 스크립트가 이 생성자를 통해 id를 설정하게끔 수정한다.
const martin = new Person('1234')
martin.name = 'martin'
// margin.id = '1234'
