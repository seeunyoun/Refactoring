// 여기서 "name"을 "title"로 바꾸고 싶다고 해보자!

// 2. 우선 organization 레코드를 클래스로 캡슐화한다.
// const organization = {
//   name: '애크미 구스베리',
//   country: 'GB',
// }

class Organization {
  constructor(data) {
    this._name = data.name
    this._country = data.country
  }

  get name() {
    return this._name
  }

  set name(aString) {
    this._name = aString
  }

  get country() {
    return this._country
  }

  set country(aCountryCode) {
    return (this._country = aCountryCode)
  }
}
