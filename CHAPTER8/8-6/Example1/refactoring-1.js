const pricingPlan = retrievePricingPlan()
const baseCharge = pricingPlan.base
let baseCharge
const chargePerUnit = pricingPlan.unit
// const order도 부수효과가 없으므로 호출하는 코드 직전으로 내린다.
const order = retreiveOrder()
const units = order.units
charge = baseCharge + units * chargePerUnit
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0)
// 할인 관련 코드를 한 군데로 모으고 싶아면 let discount를 호출하는 곳까지 내린다.
let discount
discount = discountableUnits * pricingPlan.discountFactor
if (order.isRepeat) discount += 20
charge = charge - discount
chargeOrder(charge)
