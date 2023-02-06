// 생략 (중요하지 않은 코드)
checkForMiscreants(people)

// 1. 함수 추출하기를 활용해서 함수를 뽑아낸다.
function checkForMiscreants(people) {
  // 4. 갱신 코드를 모두 제거했다면 제어 플래그를 참조하는 다른 코드도 모두 제거한다.
  // let found = false
  for (const p of people) {
    // 4. 갱신 코드를 모두 제거했다면 제어 플래그를 참조하는 다른 코드도 모두 제거한다.
    // if (!found) {
    if (p === '조커') {
      sendAlert()
      // 2. 제어 플래그가 참이면 반복문에서는 더이상 할 일이 없다.
      // 이 함수에서는 더 할 일이 없으니 return을 사용하자.
      return
    }
    if (p === '사루만') {
      sendAlert()
      // 3. 제어 플래그가 갱신되는 코드를 찾아 return한다.
      return
    }
    // }
  }
}

// 생략
