class Order {
  constructor(data) {
    this.priority = data.priority
  }

  // Priority 객체를 제공하는 게터를 Order 클래스에 만드는 편이 낫다.
  get priority() {
    return this._priority
  }

  get priorityString() {
    return this._priority.toString()
  }

  set priority(aString) {
    this._priority = new Priority(aString)
  }
}

class Priority {
  constructor(value) {
    // Priority 클래스는 다른 곳에서도 유용할 수 있으니 Order의 세터가 Priority 인스턴스를 받도록 해주면 좋다.
    // 이를 위해 Priority의 생성자를 다음과 같이 변경한다.
    if (value instanceof Priority) return value
    // 우선순위 값을 검증하고 비교하는 로직을 추가한다.
    if (Priority.legalValues().includes(value)) {
      this._value = value
    } else {
      throw new Error(`${value}는 유효하지 않은 우선순위입니다.`)
    }
  }

  toString() {
    return this._value
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this.value)
  }

  static legalValues() {
    return ['low', 'normal', 'high', 'rush']
  }

  equals(other) {
    return this._index === other._index
  }

  higherThan(other) {
    return this._index > other._index
  }

  lowerThan(other) {
    return this._index < other._index
  }
}

// 클라이언트
const highPriorityCount = orders.filter((o) =>
  o.priority.higherThan(new Priority('normal')),
).length
