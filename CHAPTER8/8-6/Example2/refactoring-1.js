let result
if (availableResources.length === 0) {
  result = createResource()
} else {
  result = availableResources.pop()
}
// 중복된 코드를 조건문 밖으로 슬라이드하기....
allocatedResources.push(result)
return result
