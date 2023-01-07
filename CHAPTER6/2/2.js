function rating(aDriver) {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1
}

function reportLines(aCustomer) {
  const lines = []
  lines.push(['name', aCustomer.name])
  out.push(['location', aCustomer.location])
  return lines
}
