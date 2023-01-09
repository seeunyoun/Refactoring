function trackSummary(points) {
  const totalTime = calculateTime()
  // const totalDistance = top_calculateDistance(points) // 11. 변수를 남겨둘 이유가 없으니 인라인 한다.
  const pace = totalTime / 60 / totalDistance(points)

  return {
    time: totalTime,
    distance: totalDistance(points),
    pace: pace,
  }

  // 7. calculateDistance() 본문을 수정해 top_calculateDistance()를 호출하게 만든다. ->
  // 8. '반드시' 모든 테스트를 수행한다. ->
  // 9. 테스트를 통과하면 가장 먼저 소스 함수를 대리자 역할로 그대로 둘지 정한다. -> 제거하는 게 나으므로 제거한다.
  // function calculateDistance() {
  //   return top_calculateDistance(points)
  // }

  function calculateTime() {} // 총 시간 계산
}

// 10. 최상위 변수는 가시성이 높으니 적합한 이름을 새로 지어 준다.
function totalDistance(points) {
  let result = 0
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i])
  }
  return result
}

// 12. distance()와 radians() 함수도 totalDistance() 안에 의존하지 않으니 최상위로 옮긴다.
function distance(p1, p2) {
  // 두 지점의 거리 계산
  const EARTH_RADIUS = 3959
  const dLat = radians(p2.lat) - radians(p1.lat)
  const dLon = radians(p2.lon) - radians(p1.lon)
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return EARTH_RADIUS * c
}

function radians(degrees) {
  // 라디안 값으로 변환
  return (degrees * Math.PI) / 180
}
