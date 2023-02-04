class Site {
  get customer() {
    return this._customer
  }
}

class Customer {
  get name() {}

  get billiingPlan() {}

  set billingPlan(arg) {}

  get paymentHistory() {}
}

// 클라이언트1
const aCustomer = site.customer
let customerName
if (aCustomer === '미확인 고객') {
  return (customerName = '거주자')
} else {
  return (customerName = aCustomer.name)
}

// 클라이언트2
const plan =
  aCustomer === '미확인 고객'
    ? CustomElementRegistry.billingPlans.basic
    : aCustomer.billingPlan

// 클라이언트3
if (aCustomer !== '미확인 고객') {
  return (aCustomer.billiingPlan = newPlan)
}

// 클라이언트4
const weekDelinquent =
  aCustomer === '미확인 고객'
    ? 0
    : aCustomer.paymentHistory.weeksDelinquentInLastYear
