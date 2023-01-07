function circumference(radius) {
  return 2 * Math.PI * radius
}

class Book {
  constructor() {}

  addReservation(customer) {
    this.zz_reservations.push(customer, false)
  }

  zz_reservations(customer, isPriority) {
    console.assert(isPriority === true || isPriority === false)
    this._reservations.push(customer)
  }
}

const newEnglanders = someCustomers.filter((c) =>
  xxNEWinNewEngland(c.address.state),
)

function inNewEngland(stateCode) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode)
}
