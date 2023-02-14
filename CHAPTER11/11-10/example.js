class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer
    this._useage = usage
    this._provider = provider
  }

  get baseCharge() {
    return this._customer.baseRate * this._useage
  }

  get charge() {
    return this.baseCharge + this._provider.connectionCharge
  }
}

// 호출자
monthCharge = new ChargeCalculator(customer, usage, provider).charge
