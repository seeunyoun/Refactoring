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
