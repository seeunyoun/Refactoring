function adjustedCapital(anInstrument) {
  // 4. result 변수는 더이상 필요없다.
  // let result = 0
  // 1. 보호 구문을 추가하면서 조건을 역으로 바꾸자.
  // if (anInstrument.capital <= 0) {
  // return result
  // }
  // 2. not 연산자를 추가한다. -> 조건식 안에 not이 있으면 이상하니 간소화한다.
  // 3. 두 If 문 모두 같은 결과를 내는 조건을 포함하니 조건식을 통합한다.
  if (
    anInstrument.capital <= 0 ||
    anInstrument.interestRate <= 0 ||
    anInstrument.duration <= 0
  ) {
    return 0
  }
  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  )
}
