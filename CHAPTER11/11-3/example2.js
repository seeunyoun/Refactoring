function deliveryDate(anOrder, isRush) {
  let result
  let deliveryTime
  if (anOrder.deliveryState === 'MA' || anOrder.deliveryState === 'CT') {
    deliveryTime = isRush ? 1 : 2
  } else if (anOrder.deliveryState === 'NY' || anOrder.deliveryState === 'NH') {
    deliveryTime = 2
    if (anOrder.deliveryState === 'NH' && !isRush) {
      deliveryTime = 3
    }
  } else if (isRush) {
    deliveryTime = 3
  } else if (anOrder.deliveryState === 'ME') {
    deliveryTime = 3
  } else {
    deliveryTime = 4
  }
  result = anOrder.placedOn.plushDays(2 + deliveryTime)
  if (isRush) {
    result = result.minusDays(1)
  }
  return result
}

// 함수를 호출하는 곳 -> 문제점: boolean들이 무엇을 의미하는지 알기 어려움.
aShipment.deliveryDate = deliveryDate(anOrder, true)
aShipment.deliveryDate = deliveryDate(anOrder, false)

// ----------------------------------------------------------------------------------------------

// [해결법] isRush를 최상위 분배 조건문으로 뽑아내지 말고 deliveryDate()를 감싸는 래핑 함수를 만든다.
// 1. 래핑함수 만들기
function rushDeliveryDate(anOrder) {
  return deliveryDate(anOrder, true)
}

function regularDeliveryDate(anOrder) {
  return deliveryDate(anOrder, false)
}

function deliveryDate(anOrder, isRush) {
  let result
  let deliveryTime
  if (anOrder.deliveryState === 'MA' || anOrder.deliveryState === 'CT') {
    deliveryTime = isRush ? 1 : 2
  } else if (anOrder.deliveryState === 'NY' || anOrder.deliveryState === 'NH') {
    deliveryTime = 2
    if (anOrder.deliveryState === 'NH' && !isRush) {
      deliveryTime = 3
    }
  } else if (isRush) {
    deliveryTime = 3
  } else if (anOrder.deliveryState === 'ME') {
    deliveryTime = 3
  } else {
    deliveryTime = 4
  }
  result = anOrder.placedOn.plushDays(2 + deliveryTime)
  if (isRush) {
    result = result.minusDays(1)
  }
  return result
}

// 함수를 호출하는 곳 -> 래핑 함수로 바꿔준다.
aShipment.deliveryDate = rushDeliveryDate(anOrder)
aShipment.deliveryDate = regularDeliveryDate(anOrder)
