let totalAscent = 0
let totalTime = 0
let totalDistance = 0
calculateAscent()
calculateTime()
calculateDistance()
const pace = totalTime / 60 / totalDistance

function calcultateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation
    totalAscent += verticalChange > 0 ? verticalChange : 0
  }
}

// -----------------------------------------------------------------------------------------------

// totalAscent가 갱신된다는 사실이 드러나지 않으므로 갱신 사실을 밖으로 알리자.
let totalAscent = 0
let totalTime = 0
let totalDistance = 0
// 2. 호출한 곳에서 변수에 대입하게 고친다.
totalAscent = calculateAscent()
calculateTime()
calculateDistance()
const pace = totalTime / 60 / totalDistance

function calcultateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation
    totalAscent += verticalChange > 0 ? verticalChange : 0
  }
  // 1. totalAscent 값을 반환하고
  return totalAscent
}
