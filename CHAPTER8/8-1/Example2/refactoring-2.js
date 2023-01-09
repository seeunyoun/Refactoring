class Account {
  get bankCharge() {
    let result = 4.5
    if (this._dayOverdrawn > 0) {
      // 6. 위임 메서드인 overdraftCharge()를 인라인 한다.
      return (result += this.type.overdraftCharge(this.daysOverdrawn))
    }
  }

  // 5. 원래 메서드의 본문을 수정하여 새 메서드를 호출하도록 한다. ->
  // 이제 원래 메서드는 위임 메서드가 된다.
  // get overdraftCharge() {
  //   // ^ 위임 메서드
  //   return this.type.overdraftCharge(this.daysOverdrawn)
  // }
}

class AccountType {
  // 1. overdraftCharge() 메서드를 계좌 종류 클래스인 AccountType 클래스로 옮긴다.
  // 4. 새 보금자리에 맞게 정리한다.
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10
      if (daysOverdrawn <= 7) {
        return baseCharge
      } else {
        return baseCharge + (daysOverdrawn - 7) * 0.85
      }
    } else {
      return daysOverdrawn * 1.75
    }
  }
}
