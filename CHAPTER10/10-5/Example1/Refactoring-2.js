class Site {
  get customer() {
    return this._customer
  }

  // 5. 특이 케이스일 때는 Unknown 객체를 반환하도록 수정한다.
  get isUnknown() {
    return this._customer === '미확인 고객'
      ? new UnknownCustomer()
      : this._customer
  }
}

class Customer {
  get name() {}

  get billiingPlan() {}

  set billingPlan(arg) {}

  get paymentHistory() {}

  // 1. 먼저 미확인 고객인지를 나타내느 메서드를 고객 클래스에 추가한다.
  get isUnknown() {
    return false
  }
}

// 2. 그런 다음 미확인 고객 전용 클래스를 만든다.
class UnknownCustomer {
  get isUnknown() {
    return true
  }
}

// 3. 코드를 별도 함수로 추출하여 한데 모은다.
// 6. 고객 객체의 속성을 사용하도록 수정한다.
function isUnknown(arg) {
  if (!(arg instanceof Customer || arg instanceof UnknownCustomer)) {
    throw new Error(`잘못된 값과 비교: <${arg}>`)
  }
  return arg.isUnknown
}

// 클라이언트1
const aCustomer = site.customer
let customerName
// 4. isUnknown() 함수를 이용해 미확인 고객인지 확인할 수 있다.
if (isUnknown(aCustomer)) {
  return (customerName = '거주자')
} else {
  return (customerName = aCustomer.name)
}

// 클라이언트2
// 4. isUnknown() 함수를 이용해 미확인 고객인지 확인할 수 있다.
const plan = isUnknown(aCustomer)
  ? CustomElementRegistry.billingPlans.basic
  : aCustomer.billingPlan

// 클라이언트3
// 4. isUnknown() 함수를 이용해 미확인 고객인지 확인할 수 있다.
if (isUnknown(aCustomer)) {
  return (aCustomer.billiingPlan = newPlan)
}

// 클라이언트4
// 4. isUnknown() 함수를 이용해 미확인 고객인지 확인할 수 있다.
const weekDelinquent = isUnknown(aCustomer)
  ? 0
  : aCustomer.paymentHistory.weeksDelinquentInLastYear
