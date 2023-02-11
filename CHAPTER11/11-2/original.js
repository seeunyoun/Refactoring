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