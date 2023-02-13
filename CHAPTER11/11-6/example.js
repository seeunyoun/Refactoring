// thermostat은 전역 객체임.
// thermostat에 건네는 질의 메서드를 매개변수로 옮겨서 의존성을 끊어보자!
class HeatingPlan {
  get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) {
      return this._max
    } else if (thermostat.selectedTemperature < this._min) {
      return this._min
    } else {
      return thermostat.selectedTemperature
    }
  }
}

// 호출자
function 호출자() {
  if (thePlan.targetTemperature > thermostat.currentTemperature) {
    return setToHeat()
  } else if (thePlan.targetTemperature < thermostat.currentTemperature) {
    return setToCool()
  } else {
    return setOff()
  }
}
