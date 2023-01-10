class Customer {
  constructor(name, discountRate) {
    this._name = name
    // 1. 우선 필드를 캡슐화한다.
    // this._discountRate = discountRate
    this._setDiscountRate(discountRate)
    this._contract = new CustomerContract(dateToday())
  }

  // discountRate 메서드를 CustomerContract 클래스로 옮긴다고 가정하면,
  get discountRate() {
    return this._discountRate
  }

  // 1. 우선 필드를 캡슐화한다.
  _setDiscountRate(aNumber) {
    this._discountRate = aNumber
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
  }
}
