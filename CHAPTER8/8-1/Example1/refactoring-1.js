function trackSummary(points) {
  const totalTime = calculateTime()
  const totalDistance = calculateDistance()
  const pace = totalTime / 60 / totalDistance

  return {
    time: totalTime,
    distance: totalDistance,
    pace: pace,
  }

  function calculateDistance() {
    // 총 거리 계산 -> 중첩 함수를 최상위로 옮김.
    let result = 0
    for (let i = 1; i < points.length; i++) {
      result += distance(points[i - 1], points[i])
    }
    return result

    // 3. distance()는 radians()만 사용하고, radians()는 현재 컨텍스트에 있는 어떤 것도 사용하지 않는다. ->
    // 4. 따라서 두 함수를 매개변수로 넘기기보다는 함께 옮겨버리는 게 낫다. ->
    // 5. calculateDistance() 함수 내부로 옮긴다.
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
  }

  function calculateTime() {} // 총 시간 계산
}

// 1. 최상위로 복사하면서 새로운 (임시) 이름을 지어줌 ->
// 2. points를 매개 변수로 받음 ->
// 4. distance는 calculateDistance()와 함께 옮기는 게 합리적임.
function top_calculateDistance(points) {
  let result = 0
  for (let i = 1; i < points.length; i++) {
    result += distance(points[i - 1], points[i])
  }
  return result

  // 6. 정적 검사와 테스트 후 문제가 없으면 top_calculateDistance() 함수 내부로도 옮긴다.
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
}
