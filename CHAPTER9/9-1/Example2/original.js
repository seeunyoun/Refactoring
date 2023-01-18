function discount(inputValue, quantity) {
  if (inputValue > 50) {
    return (inputValue = inputValue - 2)
  }
  if (quantity > 100) {
    return (inputValue = inputValue - 1)
  }
  return inputValue
}
