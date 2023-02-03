function adjustedCapital(anInstrument) {
  let result = 0
  // 1. 보호 구문을 추가하면서 조건을 역으로 바꾸자.
  if (anInstrument.capital <= 0) {
    return result
  }
  // 2. not 연산자를 추가한다. -> 조건식 안에 not이 있으면 이상하니 간소화한다.
  if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0) {
    return result
  }
  result =
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  return result
}
