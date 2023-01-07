// 2. 레코드를 클래스로 바꾸고
const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
})

// 1. 레코드 변수 캡슐화하기
function getRawDataOfOrganization() {
  return organization._data
}

// (3. 테스트한다) 4. 새 클래스의 인스턴스를 반환하는 함수를 새로 만든다.
function getOrganization() {
  return organization
}

class Organization {
  counstructor(data) {
    this._data = data
    this._name = data.name
    this._country = data.country
  }

  get name() {
    return this._data._name
  }

  set name(aString) {
    this._data.name = aString
  }

  get country() {
    return thie._country
  }

  set country(arg) {
    this._country = arg
  }
}
