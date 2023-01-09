class Person {
  constructor(name) {
    this._name = name
    this._courses = []
  }

  get name() {
    return this._name
  }

  // 저자는 메서드들을 사용하지 않고서는 아무도 목록을 변경할 수 없게 만드는 방식을 선호한다.
  // get courses 메서드도 복제본을 제공하면 된다.
  get courses() {
    return [...this._courses]
  }

  // 세터는 제거한다. 혹은 세터를 제공해야 할 특별한 이유가 있다면 인수로 받은 컬렉션의 복제본을 필드에 저장하게 한다.
  set courses(aList) {
    this._courses = [...aList]
  }

  // 제대로 캡슐화하기 위해 클라이언트가 수업을 하나씩 추가하고 제거하는 메서드를 Person 클래스에 추가한다.
  addCourse(aCourse) {
    this._courses.push(aCourse)
  }

  removeCourse(
    aCourse,
    fnIfAbsent = () => {
      throw new RangeError()
    },
  ) {
    const index = this._courses.indexOf(aCourse)
    if (index === -1) fnIfAbsent()
    else this._courses.splice(index, 1)
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name
    this._isAdvanced = isAdvanced
  }

  get name() {
    return this._name
  }

  get isAdvanced() {
    return this._isAdvanced
  }
}

// 클라이언트
const numAdvancedCourses = aPerson.courses.filter((c) => c.isAdvanced).length

const basicCourseNames = readBasicCourseNames(filename)
aPerson.courses = basicCourseNames.map((name) => new Course(name, false))

for (const name of readBasicCourseNames(filename)) {
  // aPerson.courses.push(new Course(name, false))
  // 컬렉션의 변경자를 직접 호출하던 코드를 모두 찾아서 방금 추가한 메서드를 사용하도록 바꾼다.
  aPerson.addCourse(new Course(filename, false))
}
