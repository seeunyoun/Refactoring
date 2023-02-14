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

// ---------------------------------------------------------------------------

// 1. 이 클래스를 생성하고 호출하는 코드를 함께 '함수로 추출'한다.
function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider).charge
}

class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer
    this._useage = usage
    this._provider = provider
  }

  // 3. 보조 메서드를 인라인 한다.
  // get baseCharge() {
  //   return this._customer.baseRate * this._useage
  // }

  get charge() {
    // 2. 보조 메서드들을 다룰 건데, 값을 반환하는 메서드라서 반환할 값을 '변수로 추출'한다.
    // 3. 보조 메서드를 인라인 한다.
    const baseCharge = this._customer.baseRate * this._useage
    return baseCharge + this._provider.connectionCharge
  }
}

// 호출자
monthCharge = new ChargeCalculator(customer, usage, provider).charge
