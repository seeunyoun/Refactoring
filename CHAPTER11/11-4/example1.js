// 호출자
const low = aRoom.daysTempRange.low
const high = aRoom.daysTempRange.high
if (!aPlan.withinRange(low, high)) {
  alert.push('방 온도가 지정 범위를 벗어났습니다.')
}

class HeatingPlan {
  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    )
  }
}

// ----------------------------------------------------------------------------------------
// 최저 최고 기온을 뽑아내어 인수로 건네는 대신 범위 객체를 통째로 건네자.

// 호출자
const low = aRoom.daysTempRange.low
const high = aRoom.daysTempRange.high
// 2. 기존 함수를 호출하는 코드를 찾아서 새 함수를 호출하게 수정하자.
// if (!aPlan.withinRange(low, high)) {
if (!aPlan.xxNEWwithinRange(aRoom.daysTempRange)) {
  alert.push('방 온도가 지정 범위를 벗어났습니다.')
}

class HeatingPlan {
  // 1. 원하는 인터페이스를 갖춘 빈 메서드를 만든다. -> 기존 withinRange 메서드를 대체할 예정임
  xxNEWwithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.top)
  }

  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    )
  }
}
