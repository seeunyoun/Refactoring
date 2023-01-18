// inputValue는 함수에 데이터를 전달하는 용도와 결과를 호출자에 반환하는 용도로 쓰였다.
// -> 근데, 사실 자바스크립트의 매개변수는 값에 의한 호출방식으로 전달되므로 inputValue를 수정해도 호출자에 영향을 주지 않는다.
function discount(originalInputValue, quantity) {
  // 1. inputValue를 쪼갠다.
  // 2. inputValue 변수명을 result로 바꾸고, originalInputValue는 inputValue로 고친다.
  let result = originalInputValue
  if (inputValue > 50) {
    return (result = result - 2)
  }
  if (quantity > 100) {
    return (result = result - 1)
  }
  return result
}
