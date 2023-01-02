const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

function client1() {
  const rawReading = acquireReading()
  const aReading = enrichReading(rawReading)
  const baseCharge = aReading.baseCharge
}

function client2() {
  const rawReading = acquireReading()
  const aReading = enrichReading(rawReading)
  const taxableCharge = aReading.taxableCharge
}

function client3() {
  const rawReading = acquireReading()
  const aReading = enrichReading(rawReading)
  const basicChargeAmount = aReading.baseCharge
}

function enrichReading(original) {
  const result = _.cloneDeep(original)
  result.baseCharge = calculateBaseChage(result)
  result.taxableCharge = Math.max(0, base - taxThreshold(aReading.year))
  return result
}

function calculateBaseChage(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity
}
