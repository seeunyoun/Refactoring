// 여름철이면 할인율이 달라지는 어떤 서비스 요금을 계산한다고 가정해보자.
if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
  return (charge = quantity * plan.summerRate)
} else {
  return (charge = quantity * plan.regularRate + plan.regularServiceCharge)
}
