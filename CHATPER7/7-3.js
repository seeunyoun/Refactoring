// 2. 레코드를 클래스로 바꾸고
const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
})

// 1. 레코드 변수 캡슐화하기 -> 6. 임시 함수 제거한다.
// function getRawDataOfOrganization() {
//   return organization._data
// }

// (3. 테스트한다) 4. 새 클래스의 인스턴스를 반환하는 함수를 새로 만든다.
function getOrganization() {
  return organization
}

class Organization {
  counstructor(data) {
    // 7. 마지막으로 _.data의 필드들을 객체 안에 바로 펼쳐 놓으면 더 깔끔할 것 같다.
    this._name = data.name
    this._country = data.country
  }

  get name() {
    return this._name
  }

  set name(aString) {
    this.name = aString
  }

  get country() {
    return thie._country
  }

  set country(arg) {
    this._country = arg
  }
}
