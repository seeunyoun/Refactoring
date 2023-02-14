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

// ---------------------------------------------------------------------------

// 1. 이 클래스를 생성하고 호출하는 코드를 함께 '함수로 추출'한다.
function charge(customer, usage, provider) {
  return new ChargeCalculator(customer, usage, provider).charge(
    customer,
    usage,
    provider,
  )
}

class ChargeCalculator {
  // 5. charge() 본문에서 필드 대신 건네받은 매개변수를 사용하도록 수정한다.
  constructor() {
    // this._customer = customer
    // this._useage = usage
    // this._provider = provider
  }

  // 4. 생성자에 전달되는 모든 데이터를 주 메서드로 옮겨야 한다.
  // 생성자가 받던 모든 매개변수를 charge() 메서드로 옮기기 위해 '함수 선언 바꾸기'를 사용한다.
  // 5. charge() 본문에서 필드 대신 건네받은 매개변수를 사용하도록 수정한다.
  get charge(customer, usage, provider) {
    // 2. 보조 메서드들을 다룰 건데, 값을 반환하는 메서드라서 반환할 값을 '변수로 추출'한다.
    // 3. 보조 메서드를 인라인 한다.
    const baseCharge = customer.baseRate * usage
    return baseCharge + provider.connectionCharge
  }
}

// 호출자
monthCharge = new ChargeCalculator(customer, usage, provider).charge
