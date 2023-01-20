// 여기서 "name"을 "title"로 바꾸고 싶다고 해보자!

// 2. 우선 organization 레코드를 클래스로 캡슐화한다.
class Organization {
  constructor(data) {
    // 3. 별도의 필드를 정의하고 생성자와 접근자에서 둘을 구분해 사용하도록 하자.
    // -> 다음으로 생성자에서 "title"도 받아들일 수 있도록 조치한다.
    // this._name = data.name
    this._title = data.title !== undefined ? this.title : this.name
    this._country = data.country
  }

  get name() {
    return this._title
  }

  set name(aString) {
    this._title = aString
  }

  get country() {
    return this._country
  }

  set country(aCountryCode) {
    return (this._country = aCountryCode)
  }
}

// 4. 생성자를 호출하는 곳을 찾아서 "name" -> 새로운 이름인 "title"로 바꾼다.
const organization = new Organization({
  title: '애크미 구스베리',
  country: 'GB',
})
