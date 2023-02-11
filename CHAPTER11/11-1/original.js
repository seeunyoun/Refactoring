function alertForMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      setOffAlarms()
      return '조커'
    }
    if (p === '사루만') {
      setOffAlarms()
      return '사루만'
    }
  }
  return ''
}

// 1. 함수를 복제하고 질의 목적에 맞는 이름 짓기
function findMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      // 2. 새 질의 함수에서 부수효과를 낳는 부분을 제거한다.
      // setOffAlarms()
      return '조커'
    }
    if (p === '사루만') {
      // setOffAlarms()
      return '사루만'
    }
  }
  return ''
}

// 3. 정적 검사를 수행한다.

function alertForMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      setOffAlarms()
      return '조커'
    }
    if (p === '사루만') {
      setOffAlarms()
      return '사루만'
    }
  }
  return ''
}
