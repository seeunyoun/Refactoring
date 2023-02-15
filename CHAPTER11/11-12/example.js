function localShippingRules(country) {
  const data = countryData.shippingRules[country]
  if (data) {
    return new shippingRules(data)
  } else {
    return -23
  }
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country)
  if (shippingRules < 0) {
    return shippingRules
  }
}

const status = calculateShippingCosts(orderData)
if (status < 0) {
  errorList.push({ order: orderData, errorCode: status })
}

// -----------------------------------------------------------------------------

// 1. 가장 먼저 최상위에 예외 핸들러를 갖춘다.
let status
try {
  status = calculateShippingCosts(orderData)
} catch (e) {
  throw e
}

if (status < 0) {
  errorList.push({ order: orderData, errorCode: status })
}

function localShippingRules(country) {
  const data = countryData.shippingRules[country]
  if (data) {
    return new shippingRules(data)
  } else {
    return -23
  }
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country)
  if (shippingRules < 0) {
    return shippingRules
  }
}

// 2. 서브클래스를 만들어 예외를 처리한다.
class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류: ${errorCode}`)
    this.code = errorCode
  }

  get name() {
    return 'OrderProcessingError'
  }
}
