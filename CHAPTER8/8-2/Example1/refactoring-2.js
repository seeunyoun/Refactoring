class Customer {
  constructor(name, discountRate) {
    this._name = name
    // 6. 생성자에서 contract 객체를 생성하기도 전에 _setDiscountRate()를 호출해서 에러가 났으므로 위치를 바꾼다.
    this._contract = new CustomerContract(dateToday())
    // 1. 우선 필드를 캡슐화한다.
    // this._discountRate = discountRate
    this._setDiscountRate(discountRate)
  }

  // discountRate 메서드를 CustomerContract 클래스로 옮긴다고 가정하면,
  get discountRate() {
    // 7. 테스트를 하고 성공하면 접근자들을 수정한다.
    return this._contract._discountRate
  }

  // 1. 우선 필드를 캡슐화한다.
  _setDiscountRate(aNumber) {
    // 7. 테스트를 하고 성공하면 접근자들을 수정한다.
    this._contract._discountRate = aNumber
  }

  becomePreferred() {
    // this.discountRate += 0.03
    // 1. 우선 필드를 캡슐화한다.
    this._setDiscountRate(this.discountRate + 0.03)
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate))
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate
    // 3. CustomerContract 클래스에 필드 하나와 접근자들을 추가한다.
    this._discountRate = discountRate
  }

  // 3. CustomerContract 클래스에 필드 하나와 접근자들을 추가한다.
  get discountRate() {
    return this._discountRate
  }

  // 3. CustomerContract 클래스에 필드 하나와 접근자들을 추가한다.
  set discountRate(arg) {
    this._discountRate = arg
  }
}
