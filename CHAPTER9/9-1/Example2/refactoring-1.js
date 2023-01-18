// inputValue는 함수에 데이터를 전달하는 용도와 결과를 호출자에 반환하는 용도로 쓰였다.
// -> 근데, 사실 자바스크립트의 매개변수는 값에 의한 호출방식으로 전달되므로 inputValue를 수정해도 호출자에 영향을 주지 않는다.
function discount(originalInputValue, quantity) {
  // 1. inputValue를 쪼갠다.
  let inputValue = originalInputValue
  if (inputValue > 50) {
    return (inputValue = inputValue - 2)
  }
  if (quantity > 100) {
    return (inputValue = inputValue - 1)
  }
  return inputValue
}
