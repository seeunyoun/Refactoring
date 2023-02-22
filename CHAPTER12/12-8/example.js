class Example {
  constructor(name, id, monthlyCost) {
    this._id = id;
    this._name = name;
    this._monthlyCost = monthlyCost;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department {
  constructor(name, staff) {
    this._name = name;
    this._staff = staff;
  }

  get staff() {
    return this._staff.slice();
  }

  get name() {
    return this._name;
  }

  get totalMonthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }

  get headCount() {
    return this.staff.length;
  }

  get totalAnnualCost() {
    return this.totalMonthlyCost * 12;
  }
}

// ---------------------------------------------------------------------------

// 1. 빈 슈퍼클래스를 만들고, 두 클래스가 이를 확장하도록 한다.
class Party {
  // 2. 데이터부터 바꿔나가자. 이름 속성을 먼저 위로 올린다.(필드 올리기)
  constructor(name) {
    this._name = name;
  }

  // 3. 필드 올리기를 했으면 메서드를 올린다.
  get name() {
    return this._name;
  }
}

class Example extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  get id() {
    return this._id;
  }

  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }

  get staff() {
    return this._staff.slice();
  }

  // 4. (함수 선언 바꾸기 리팩터링)으로 이름을 통일한다.
  get monthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }

  get headCount() {
    return this.staff.length;
  }

  // 5. 4번과 같은 방식으로 (함수 선언 바꾸기 리팩터링)으로 이름을 통일한다.
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

// ---------------------------------------------------------------------------

// 1. 빈 슈퍼클래스를 만들고, 두 클래스가 이를 확장하도록 한다.
class Party {
  // 2. 데이터부터 바꿔나가자. 이름 속성을 먼저 위로 올린다.(필드 올리기)
  constructor(name) {
    this._name = name;
  }

  // 3. 필드 올리기를 했으면 메서드를 올린다.
  get name() {
    return this._name;
  }

  // 6. '메서트 올리기' 리팩터링을 한다.
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Example extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }

  get monthlyCost() {
    return this._monthlyCost;
  }

  get id() {
    return this._id;
  }

  // 6. '메서트 올리기' 리팩터링을 한다.
  // get annualCost() {
  //   return this.monthlyCost * 12;
  // }
}

class Department extends Party {
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }

  get staff() {
    return this._staff.slice();
  }

  // 4. (함수 선언 바꾸기 리팩터링)으로 이름을 통일한다.
  get monthlyCost() {
    return this.staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost);
  }

  get headCount() {
    return this.staff.length;
  }

  // 5. 4번과 같은 방식으로 (함수 선언 바꾸기 리팩터링)으로 이름을 통일한다.
  // 6. '메서드 올리기' 리팩터링을 한다.
  // get annualCost() {
  //   return this.monthlyCost * 12;
  // }
}
