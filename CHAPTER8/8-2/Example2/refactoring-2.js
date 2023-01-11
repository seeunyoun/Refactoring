class Account {
  constructor(number, type) {
    this._number = number
    this._type = type
    // 4. -> Account클래스에 assertion을 추가하면 도움이 된다.
    // 8. Account에서 이자율을 직접 수정하던 코드를 완전히 제거한다.
    // console.assert(interestRate === this._type.interestRate)
    // this._interestRate = interestRate
  }

  // 1. 이자율 필드는 이미 잘 캡슐화 되어 있으니
  get interestRate() {
    // 6. 시스템의 겉보기 동작이 달라지지 않는다면, 이자율을 가져오는 부분을 변경하고
    // return this._interestRate
    return this._type.interestRate
  }
}

class AccountType {
  constructor(nameString) {
    this._name = nameString
    // 3. 타깃인 AuucountType에 이자율 필드와 필요한 접근자 메서드를 생성해보자.
    // 4. 그런데 Account가 AccountType의 이자율을 가져오도록 수정하면 문제가 생길 수 있다.
    // 리팩터링 전에는 각 계좌가 자신만의 이자율을 갖고 있었고, 지금은 종류가 같은 모든 계좌가 이자율을 공유하기를 원한다.
    // 하지만 이자율이 다른 계좌가 하나라도 있었다면, 수정 전과 후의 겉보기 동작이 달라지기 때문이다.
    // 계좌 데이터를 데이터베이스에 보관한다면 먼저 데이터 베이스를 확인해서 모든 계좌의 이자율이 계좌 종류에 부합하게 설정되어 있는지 확인해야 한다.
    // -> Account클래스에 assertion을 추가하면 도움이 된다.
    this._interestRate = interestRate
  }

  // 3. 타깃인 AuucountType에 이자율 필드와 필요한 접근자 메서드를 생성해보자.
  get interestRate() {
    return this._interestRate
  }
}
