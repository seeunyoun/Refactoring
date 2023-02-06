class Customer {
  applyDiscount(aNumber) {
    if (!this.discountRate) {
      return aNumber
    } else {
      return aNumber - this.discountRate * aNumber
    }
  }
}
