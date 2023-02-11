function baseCharge(usage) {
  if (usage < 0) {
    return usd(0)
  }
  const amount =
    bottomBand(usage) * 0.03 + middleBand(usage) * 0.05 + topBand(usage) * 0.07
  return usd(amount)
}

function bottomBand(usage) {
  return Math.min(usage, 100)
}

function middleBand(usage) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0
}

// 1. 범위를 다루는 로직에서는 대개 중간에 해당하는 함수에서 시작하는 게 좋다. -> 함수 바꾸기를 적용한다.
// middleBand -> withinBand
// withinBand 매개변수를 추가하고 다른 호출들을 여기에 맞춘다.
function withinBand(usage, bottom, top) {
  return usage > 100 ? Math.min(usage, 200) - 100 : 0
}

function baseCharge(usage) {
  if (usage < 0) {
    return usd(0)
  }
  // 2. middleBand -> withinBand
  const amount =
    bottomBand(usage) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    topBand(usage) * 0.07
  return usd(amount)
}

function bottomBand(usage) {
  return Math.min(usage, 100)
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0
}

// 3. 테스트한다.

// 4. 함수에서 사용하던 리터럴들을 적절한 매개변수로 대체한다. (100 -> bottom)
// 5. 나머지 매개변수도 대체한다. (200 -> top)
function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0
}

function baseCharge(usage) {
  if (usage < 0) {
    return usd(0)
  }
  const amount =
    bottomBand(usage) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    topBand(usage) * 0.07
  return usd(amount)
}

function bottomBand(usage) {
  return Math.min(usage, 100)
}

function topBand(usage) {
  return usage > 200 ? usage - 200 : 0
}

//
function withinBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0
}

function baseCharge(usage) {
  if (usage < 0) {
    return usd(0)
  }

  // 6. bottomBand를 호출하는 부분도 새로 만든 매개변수화 함수를 호출하도록 바꾼다.
  // 7. topBand를 호출하는 부분도 새로 만든 매개변수화 함수를 호출하도록 바꾼다. -> 상한 호출을 대체할 때는 무한대를 뜻하는 Infinity를 이용한다.
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07
  return usd(amount)
}

// function bottomBand(usage) {
//   return Math.min(usage, 100)
// }

// function topBand(usage) {
//   return usage > 200 ? usage - 200 : 0
// }
