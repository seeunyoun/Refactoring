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

// -----------------------------------------------------------------------------------------------

// totalAscent가 갱신된다는 사실이 드러나지 않으므로 갱신 사실을 밖으로 알리자.
let totalAscent = 0
let totalTime = 0
let totalDistance = 0
// 2. 호출한 곳에서 변수에 대입하게 고친다.
// 4. 그런 다음 이 계산이 변수 선언과 동시에 수행되도록 하고, 변수에 const를 붙여서 불변으로 만든다.
const totalAscent = calculateAscent()
const totalTime = calculateTime()
const totalDistance = calculateDistance()
const pace = totalTime / 60 / totalDistance

function calcultateAscent() {
  // 3. 반환할 값을 담을 변수인 result를 totalAscent를 함수 안에 선언한다.
  let result = 0
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation
    result += verticalChange > 0 ? verticalChange : 0
  }
  // 1. totalAscent 값(rename -> result)을 반환하고
  return result
}
