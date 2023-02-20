class Party {}

class Employee extends Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  get totalAnnualCost() {
    return this.monthlyCost * 12;
  }
}

// --------------------------------------------------------------
// 두 매서드에서 참조하는 monthlyCost() 속성은 슈퍼클래스에는 정의되어 있지 않지만,
// 두 서브 클래스에 모두 존재한다.

class Party {}

class Employee extends Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

// 1. 두 메서드의 이름이 다르므로 '함수 선언 바꾸기'로 이름을 통일한다.
class Department extends Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

// --------------------------------------------------------------
// 두 매서드에서 참조하는 monthlyCost() 속성은 슈퍼클래스에는 정의되어 있지 않지만,
// 두 서브 클래스에 모두 존재한다.

// 2. 서브클래스 중 하나의 메서드를 복사해 슈퍼클래스에 붙여넣는다.
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

// 1. 두 메서드의 이름이 다르므로 '함수 선언 바꾸기'로 이름을 통일한다.
class Department extends Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

// --------------------------------------------------------------
// 두 매서드에서 참조하는 monthlyCost() 속성은 슈퍼클래스에는 정의되어 있지 않지만,
// 두 서브 클래스에 모두 존재한다.

// 2. 서브클래스 중 하나의 메서드를 복사해 슈퍼클래스에 붙여넣는다.
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  // 3. 슈퍼클래스에 있으니 서브클래스에서는 해당 메서드를 제거한다.
  // get annualCost() {
  //   return this.monthlyCost * 12;
  // }
}

// 1. 두 메서드의 이름이 다르므로 '함수 선언 바꾸기'로 이름을 통일한다.
class Department extends Party {
  // 3. 슈퍼클래스에 있으니 서브클래스에서는 해당 메서드를 제거한다.
  // get annualCost() {
  //   return this.monthlyCost * 12;
  // }
}

// --------------------------------------------------------------
// 두 매서드에서 참조하는 monthlyCost() 속성은 슈퍼클래스에는 정의되어 있지 않지만,
// 두 서브 클래스에 모두 존재한다.

// 2. 서브클래스 중 하나의 메서드를 복사해 슈퍼클래스에 붙여넣는다.
class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }

  // 4. Party의 서브클래스가 monthlyCost()를 구현해야 한다는 사실을 알려주는 게 좋다.
  // 해당 함수를 미리 만들어 놓는다.
  get monthlyCost() {
    throw new SubclassResponsibilityError(); // 이런 오류를 서브클래스 책임 오류라 한다.
  }
}

class Employee extends Party {
  // 3. 슈퍼클래스에 있으니 서브클래스에서는 해당 메서드를 제거한다.
}

// 1. 두 메서드의 이름이 다르므로 '함수 선언 바꾸기'로 이름을 통일한다.
class Department extends Party {
  // 3. 슈퍼클래스에 있으니 서브클래스에서는 해당 메서드를 제거한다.
}
