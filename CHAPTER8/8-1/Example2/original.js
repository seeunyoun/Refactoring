class Account {
  get bankCharge() {
    let result = 4.5
    if (this._dayOverdrawn > 0) {
      return (result += this.overdraftCharge)
    }
  }

  get overdraftCharge() { // 마이너스 통장의 초과인출 이자를 계산.
    if (this.type.isPremium) {
      const baseCharge = 10
      if (this.daysOverdrawn <= 7) {
        return baseCharge
      } else {
        return baseCharge + (this.daysOverdrawn - 7) * 0.85
      }
    } else {
      return this.daysOverdrawn * 1.75
    }
  }
}
