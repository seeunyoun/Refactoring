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

// ------------------------------------------------------------------------------------------

// thermostat은 전역 객체임.
// thermostat에 건네는 질의 메서드를 매개변수로 옮겨서 의존성을 끊어보자!
class HeatingPlan {
  get targetTemperature() {
    // 1. '변수 추출하기' 리팩터링을 통해 메서드에서 사용할 매개변수를 준비하자.
    // const selectedTemperature = thermostat.selectedTemperature
    // 3. '변수 인라인하기' 리팩터링을 적용한다.
    return this.xxNEWtargetTemperature(thermostat.selectedTemperature)
  }

  // 2. '메서드로 추출하기' 리팩터링으로 매개변수의 값을 구하는 코드를 제외한 나머지를 추출한다.
  xxNEWtargetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) {
      return this._max
    } else if (selectedTemperature < this._min) {
      return this._min
    } else {
      return selectedTemperature
    }
  }
}

// 호출자
function 호출자() {
  // 4. 메서드까지 인라인한다.
  if (thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature)) {
    return setToHeat()
  } else if (
    thePlan.xxNEWtargetTemperature(thermostat.selectedTemperature) <
    thermostat.currentTemperature
  ) {
    return setToCool()
  } else {
    return setOff()
  }
}
