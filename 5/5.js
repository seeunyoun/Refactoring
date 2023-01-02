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

const newEnglanders = someCustomers.filter((c) => inNewEngland(c))

function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state)
}
