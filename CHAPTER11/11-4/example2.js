// 호출자
const low = aRoom.daysTempRange.low
const high = aRoom.daysTempRange.high
if (!aPlan.withinRange(low, high)) {
  alert.push('방 온도가 지정 범위를 벗어났습니다.')
}

// ----------------------------------------------------------------------------------------

// 호출자
// 2. 입력 매개변수를 추출한다.
const tempRange = aRoom.daysTempRange
const low = tempRange.low
const high = tempRange.high
// 1. '변수 추출하기' 리팩터링을 한다.
const isWithinRange = aPlan.withinRange(low, high)
if (!isWithinRange) {
  alert.push('방 온도가 지정 범위를 벗어났습니다.')
}

// ----------------------------------------------------------------------------------------

// 호출자
// 2. 입력 매개변수를 추출한다.
const tempRange = aRoom.daysTempRange

// 1. '변수 추출하기' 리팩터링을 한다.
const isWithinRange = xxNEWwithinRange(aPlan, tempRange)
if (!isWithinRange) {
  alert.push('방 온도가 지정 범위를 벗어났습니다.')
}

// 3. '함수 추출하기'로 새 매서드를 만든다.
function xxNEWwithinRange(aPlan, tempRange) {
  const low = tempRange.low
  const high = tempRange.high
  const isWithinRange = aPlan.withinRange(low, high)
  return isWithinRange
}
