function disabilityAmount(anEmployee) {
  // 1. 결과로 행하는 동작이 같으므로 순차적인 경우에는 or 연산자를 이용한다.
  if (isNotEligibleForDisability()) {
    return 0
  }
  // 장애 수당 계산

  // 2. 모든 조건을 통합했다면 최종 조건식을 함수로 추출해볼 수 있다.
  function isNotEligibleForDisability() {
    return (
      anEmployee.seniority < 2 ||
      anEmployee.monthsDisabled > 12 ||
      anEmployee.isPartTime
    )
  }
}
