organization = {
  name: '애크미 구스베리',
  country: 'GB',
}

class Organization {
  counstructor(data) {
    this._name = data.name
    this._country = data.country
  }

  get name() {
    return this._name
  }

  set name(arg) {
    this._name = arg
  }

  get country() {
    return thie._country
  }

  set country(arg) {
    this._country = arg
  }
}
