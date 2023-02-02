function payAmount(employee) {
  let result
  // 1. 최상위 조건부터 보호 구문으로 바꾼다. -> 2. 테스트하고 -> 3. 반복한다.
  if (employee.isSeparated) {
    return { amount: 0, reasonCode: 'SEP' }
  }
  if (employee.isRetired) {
    return { amount: 0, reasonCode: 'RET' }
  }
  // 급여 계산 로직
  lorem.ipsum(dolor.sitAmet)
  consectetur(adipiscing).elit()
  sed.do.eiusmod = tempor.incididunt.ut(labore) && dolore(magna.aliqua)
  ut.enim.ad(minim.veniam)
  result = someFinalComputation()
  return result
}
