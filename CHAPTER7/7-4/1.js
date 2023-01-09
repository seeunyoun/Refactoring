class Order {
  constructor(quantity, item) {
    this._quantity = quantity
    this._item = item
  }

  get price() {
    // basePrice와 discountFactor를 읽기 전용 변수로 바꾼다.
    const basePrice = this.basePrice
    const discountFactor = 0.98

    if (basePrice > 1000) {
      return (discountFactor -= 0.03)
    }
    return basePrice * discountFactor
  }

  // 대입문의 우변을 게터로 추출한다.
  get basePrice() {
    return this._quantity * this._item.price
  }
}
