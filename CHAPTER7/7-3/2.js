class Order {
  constructor(data) {
    this.priority = data.priority
  }

  // 1. 변수 캡슐화
  // 7. 이렇게 Priority 클래스를 만들고 나면 Order 클래스의 게터가 이상해진다. => 함수 이름을 바꿔준다.(함수 선언 바꾸기)
  get priorityString() {
    // 4, 5. Priority 클래스를 사용하도록 접근자들을 수정한다.
    return this._priority.toString()
  }

  set priority(aString) {
    // 4, 5. Priority 클래스를 사용하도록 접근자들을 수정한다.
    this._priority = new Priority(aString)
  }
}

// 2. 단순한 값 클래스인 Priority 클래스를 만든다.
class Priority {
  constructor(value) {
    this._value = value
  }

  // 게터 함수보다는 해당 속성을 문자열로 표현한 값이므로 변환 함수로 표현한다.
  toString() {
    return this._value
  }
}

// 클라이언트
const highPriorityCount = orders.filter(
  (o) => 'high' === o.priorityString || 'rush' === o.priorityString,
).length
