function acquireData(input) {
  const lines = input.split('\n')
  const result = []
  // 4. 빈 줄 지우기다. 이 작업은 filter() 연산으로 대체할 수 있다.
  // 5. map() 연산을 사용해 여러 줄 짜리 데이터를 문자열 배열로 변환한다.
  // 6. 다시 한 번 filter() 연산을 통해 인도에 위치한 사무실 레코드를 뽑아낸다.
  // 7. map()을 사용해 결과 레코드를 생성한다.
  // 8. 결과를 누적 변수에 추가한다.
  const result = lines
    .slice(1)
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(','))
    .filter((record) => record[1].trim() === 'India')
    .map((record) => ({ city: record[0].trim(), phone: record[2].trim() }))

  // 8. 결과를 누적 변수에 추가한다.
  // for (const line of loopItems) {
  // 4. 빈 줄 지우기다. 이 작업은 filter() 연산으로 대체할 수 있다.
  // if (line.trim() === '') continue
  // 5. map() 연산을 사용해 여러 줄 짜리 데이터를 문자열 배열로 변환한다. <line.split() 제거>
  // const record = line
  // 6. 다시 한 번 filter() 연산을 통해 인도에 위치한 사무실 레코드를 뽑아낸다.
  // if (record[1].trim() === 'India') {
  // 7. map()을 사용해 결과 레코드를 생성한다.
  // result.push({ city: record[0].trim(), phone: record[2].trim() })
  // }
  // result.push(record)
  // }

  return result
}
