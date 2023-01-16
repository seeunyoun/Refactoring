// 5. 파이프라인으로 바꾸기
function totalSalary() {
  return people.reduce((total, p) => total + p.salary, 0)
}

// 6. 알고리즘 교체하기
function youngestAge() {
  return Math.min(...people.map((p) => p.age))
}

return `최연소: ${youngest()}, 총 급여: ${totalSalary()}`
