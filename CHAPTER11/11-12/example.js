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

// -----------------------------------------------------------------------------

// 1. 가장 먼저 최상위에 예외 핸들러를 갖춘다.
// 3. try catch 구문 안에 예외 클래스를 처리하는 로직을 추가한다.
let status
try {
  status = calculateShippingCosts(orderData)
} catch (e) {
  if (e instanceof OrderProcessingError) {
    errorList.push({ order: orderData, errorCode: e.code })
  } else {
    throw e
  }
}

function localShippingRules(country) {
  const data = countryData.shippingRules[country]
  if (data) {
    return new shippingRules(data)
  } else {
    // 4. 오류 검출 코드를 수정하여 오류 코드 대신 이 예외를 던진다.
    // return -23
    throw new OrderProcessingError(-23)
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

// -----------------------------------------------------------------------------

// 1. 가장 먼저 최상위에 예외 핸들러를 갖춘다.
// 3. try catch 구문 안에 예외 클래스를 처리하는 로직을 추가한다.
// 6. status 변수를 제거한다.
// let status
try {
  // status = calculateShippingCosts(orderData)
} catch (e) {
  if (e instanceof OrderProcessingError) {
    errorList.push({ order: orderData, errorCode: e.code })
  } else {
    throw e
  }
}

function localShippingRules(country) {
  const data = countryData.shippingRules[country]
  if (data) {
    return new shippingRules(data)
  } else {
    // 4. 오류 검출 코드를 수정하여 오류 코드 대신 이 예외를 던진다.
    // return -23
    throw new OrderProcessingError(-23)
  }
}

function calculateShippingCosts(anOrder) {
  const shippingRules = localShippingRules(anOrder.country)
  // 5. 오류 코드를 전파하는 임시 코드를 제거할 수 있다.
  // if (shippingRules < 0) {
  //   return shippingRules
  // }
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
