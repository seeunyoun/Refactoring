function disabilityAmount(anEmployee) {
  // 1. 결과로 행하는 동작이 같으므로 순차적인 경우에는 or 연산자를 이용한다.
  if (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  ) {
    return 0
  }
  // 장애 수당 계산
}
