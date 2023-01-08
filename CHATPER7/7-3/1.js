class Order {
  constructor(data) {
    this.priority = data.priority
  }

  // 1. 변수 캡슐화
  get priority() {
    return this._priority
  }

  set priority(aString) {
    this._priority = aString
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
  (o) => 'high' === o.priority || 'rush' === o.priority,
).length
