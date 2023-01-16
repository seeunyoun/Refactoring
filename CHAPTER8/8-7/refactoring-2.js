// 4. 각 반복문을 함수로 추출한다.
function totalSalary() {
  let totalSalary = 0
  for (const p of people) {
    totalSalary += p.salary
  }

  return totalSalary
}

// 4. 각 반복문을 함수로 추출한다.
function youngestAge() {
  // 3. 문장 슬라이드하기
  let youngest = people[0] ? people[0].age : Infinity
  for (const p of people) {
    if (p.age < youngest) {
      return (youngest = p.age)
    }
  }

  return youngest
}

return `최연소: ${youngest()}, 총 급여: ${totalSalary()}`
