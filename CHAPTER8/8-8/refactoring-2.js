function acquireData(input) {
  const lines = input.split('\n')
  const result = []
  // 4. 빈 줄 지우기다. 이 작업은 filter() 연산으로 대체할 수 있다.
  const loopItems = lines.slice(1).filter((line) => line.trim() !== '')

  for (const line of loopItems) {
    // 4. 빈 줄 지우기다. 이 작업은 filter() 연산으로 대체할 수 있다.
    // if (line.trim() === '') continue
    const record = line.split(',')
    if (record[1].trim() === 'India') {
      result.push({ city: record[0].trim(), phone: record[2].trim() })
    }
  }

  return result
}
