class Account {
  get bankCharge() {
    let result = 4.5
    if (this._dayOverdrawn > 0) {
      return (result += this.overdraftCharge)
    }
  }

  // 2. overdraftCharge() 메서드의 기능을 살펴보고 모두 옮길 가치가 있는지 고민해본다 ->
  // 3. 뭔진 잘 모르겠지만 daysOverdrawn: 초과인출한() 메서드는 Account 클래스에 남겨두어야 한다고 한다......??
  get overdraftCharge() {
    // 마이너스 통장의 초과인출 이자를 계산.
    if (this.type.isPremium) {
      const baseCharge = 10
      if (this.daysOverdrawn <= 7) {
        return baseCharge
      } else {
        return baseCharge + (this.daysOverdrawn - 7) * 0.85
      }
    } else {
      return this.daysOverdrawn * 1.75
    }
  }
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
