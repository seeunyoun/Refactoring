class Order {
  constructor(quantity, item) {
    this._quantity = quantity
    this._item = item
  }

  get price() {
    // basePrice와 discountFactor를 읽기 전용 변수로 바꾼다.
    // 변수를 인라인 한다.
    // const discountFactor = this.discountFactor
    return this.basePrice * this.discountFactor
  }

  get basePrice() {
    return this._quantity * this._item.price
  }

  // 대입문의 우변을 게터로 추출한다.
  get discountFactor() {
    const discountFactor = 0.98
    if (this.basePrice > 1000) {
      return (discountFactor -= 0.03)
    }
    return discountFactor
  }
}
