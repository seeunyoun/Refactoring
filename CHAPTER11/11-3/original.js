function deliveryDate(anOrder, isRush) {
  if (isRush) {
    let deliveryTime
    if (['MA', 'CT'].includes(anOrder.deliveryState)) {
      deliveryTime = 1
    } else if (['NY', 'NH'].includes(anOrder.deliveryState)) {
      deliveryTime = 2
    } else {
      deliveryTime = 3
    }
    return anOrder.placedOn.plusDay(1 + deliveryTime)
  }
}

// 함수를 호출하는 곳 -> 문제점: boolean들이 무엇을 의미하는지 알기 어려움.
aShipment.deliveryDate = deliveryDate(anOrder, true)
aShipment.deliveryDate = deliveryDate(anOrder, false)

// -----------------------------------------------------------------------------------

// [해결법] 불리언 리터럴 값을 없애고 명시적인 함수로 바꾸자.
// 1. 조건문을 분해하자.
function deliveryDate(anOrder, isRush) {
  if (isRush) {
    return rushDeliveryDate(anOrder)
  } else {
    return regularDeliveryDate(anOrder)
  }
}

function rushDeliveryDate(anOrder) {
  let deliveryTime
  if (['MA', 'CT'].includes(anOrder.deliveryState)) {
    deliveryTime = 1
  } else if (['NY', 'NH'].includes(anOrder.deliveryState)) {
    deliveryTime = 2
  } else {
    deliveryTime = 3
  }
  return anOrder.placedOn.plusDay(1 + deliveryTime)
}

function regularDeliveryDate(anOrder) {
  let deliveryTime
  if (['MA', 'CT', 'NY'].includes(anOrder.deliveryState)) {
    deliveryTime = 2
  } else if (['NY', 'NH'].includes(anOrder.deliveryState)) {
    deliveryTime = 3
  } else {
    deliveryTime = 4
  }
  return anOrder.placedOn.plusDay(1 + deliveryTime)
}

// 함수를 호출하는 곳 -> boolean 인수를 제거할 수 있다.
aShipment.deliveryDate = rushDeliveryDate(anOrder)
aShipment.deliveryDate = regularDeliveryDate(anOrder)
