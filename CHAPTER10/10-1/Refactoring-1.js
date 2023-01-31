// 여름철이면 할인율이 달라지는 어떤 서비스 요금을 계산한다고 가정해보자.
if (summer()) {
  return (charge = summerCharge())
} else {
  return (charge = regularCharge())
}

// 1. 우선 조건식을 별도 함수로 추출한다.
function summer() {
  return !aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)
}

// 2. 조건이 만족했을 때의 로직도 또 다른 함수로 추출한다.
function summerCharge() {
  return quantity * plan.summerRate
}

// 3. else 절도 별도 함수로 추출한다.
function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge
}
