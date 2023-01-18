function distanceTravelled(scenario, time) {
  let result
  // 1. 변수에 새로운 이름을 지어주고, 2. 선언시 const를 붙여 불변으로 만든다.
  let primaryAcceleration = scenario.primaryForce / scenario.mass
  const primaryTime = Math.min(time, scenario.delay)
  // 3. 두 번째 대입 전까지 모든 참조를 새로운 이름으로 바꾼다.
  result = 0.5 * primaryAcceleration * primaryTime * primaryTime
  let secondaryTime = time - scenario.delay
  if (secondaryTime > 0) {
    // 3. 두 번째 대입 전까지 모든 참조를 새로운 이름으로 바꾼다.
    let primaryVelocity = primaryAcceleration * scenario.delay
    // 4. 두 번째 대입 하는 곳에서 변수를 원래 이름으로 다시 선언한다.
    let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass
    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime
  }
  return result
}
