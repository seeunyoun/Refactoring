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

// 4. 원래 함수를 호출하는 곳을 찾아서 새로운 질의 함수를 호출하도록 바꾸고
// 이어서 변경 함수를 호출하는 코드를 아래에 삽입한다.
const found = alertForMiscreant(people)
const found = findMiscreant(people)
alertForMiscreant()

// 5. 원래 변경 함수에서 질의 관련 코드를 없앤다.
function alertForMiscreant(people) {
  for (const p of people) {
    if (p === '조커') {
      return setOffAlarms()
    }
    if (p === '사루만') {
      return setOffAlarms()
    }
  }
  return ''
}
