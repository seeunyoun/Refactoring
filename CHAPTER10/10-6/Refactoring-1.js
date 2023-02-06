class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber
    } else {
      // 1. assert를 추가한다.
      console.assert(this.discountRate >= 0)
      return aNumber - this.discountRate * aNumber
    }
  }

  // 2. 어서션이 applyDiscount에서 실패한다면
  // 이 문제가 언제 처음 발생했는지를 찾는 문제를 다시 풀어야 하므로 assert를 세터 메서드에 추가한다.
  set discountRate(aNumber) {
    console.assert(null === aNumber || aNumber >= 0)
    this._discountRate = aNumber
  }
}
