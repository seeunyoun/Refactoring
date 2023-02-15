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
