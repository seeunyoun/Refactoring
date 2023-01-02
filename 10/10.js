const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 }

function client1() {
  const aReading = acquireReading()
  const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity
}

function client2() {
  const aReading = acquireReading()
  const base = baseRate(aReading.month, aReading.year) * aReading.quantity
  const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))
}

function client3() {
  const aReading = acquireReading()
  const basicChargeAmount = calculateBaseChage(aReading)

  function calculateBaseChage(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity
  }
}
