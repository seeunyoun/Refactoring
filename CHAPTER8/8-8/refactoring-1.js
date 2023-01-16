function acquireData(input) {
  const lines = input.split('\n')
  // 3. 2번의 결과로 firstLine 변수도 지울 수 있게 됐다.
  // let firstLine = true
  const result = []
  // 1. 반복문에서 사용하는 컬렉션을 가리키는 별도의 변수를 새로 만든다.
  const loopItems = lines.slice(1)
  for (const line of loopItems) {
    // 2. slice() 연산을 루프 변수에서 수행하고 반복문 안의 if문은 제거한다.
    // if (firstLine) {
    // firstLine = false
    // continue
    // }
    if (line.trim() === '') continue
    const record = line.split(',')
    if (record[1].trim() === 'India') {
      result.push({ city: record[0].trim(), phone: record[2].trim() })
    }
  }

  return result
}
