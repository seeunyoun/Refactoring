let youngest = people[0] ? people[0].age : Infinity
let totalSalary = 0
for (const p of people) {
  // 2. 반복문을 복제한 후 잘못된 결과를 초래할 수 있는 중복을 제거한다.
  // if (p.age < youngest) {
  // return (youngest = p.age)
  // }
  totalSalary += p.salary
}
// 1. 단순히 반복문을 복사한다.
for (const p of people) {
  if (p.age < youngest) {
    return (youngest = p.age)
  }
  // 2. 반복문을 복제한 후 잘못된 결과를 초래할 수 있는 중복을 제거한다.
  // totalSalary += p.salary
}

return `최연소: ${youngest}, 총 급여: ${totalSalary}`
