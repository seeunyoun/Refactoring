// 총 두 곳에서 emitPhotoData()를 호출하며, 두 곳 모두 바로 앞에는 title 출력 코드가 나온다.
// title을 출력하는 코드를 emitPhotoData() 안으로 옮겨 이 중복을 없애 보자.

function renderPerson(outStream, person) {
  const result = []
  result.push(`<p>${person.name}</p>`)
  result.push(renderPhoto(person.photo))
  // 4. 다른 호출자들을 찾아서 새로운 함수를 호출하도록 수정한다.
  // result.push(`<p>제목: ${person.photo.title}</p>`)
  // result.push(emitPhotoData(person.photo))
  result.push(zznew(person.photo))
  return result.join('\n')
}

// 3. 가장 먼저 호출자 중 하나에 함수 추출하기를 적용하자.
// emitPhotoData()로 옮기려고 했던 p.title코드와 emitPhotoData() 호출문을 함께 추출한다.
function photoDiv(p) {
  return [
    `<div>
      ${zznew(p)}
    </div>`,
  ].join('\n')
}

function emitPhotoData(aPhoto) {
  const result = []
  result.push(`<p>위치: ${aPhoto.location}</p>`)
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`)
  return result.join('\n')
}

// 3. 가장 먼저 호출자 중 하나에 함수 추출하기를 적용하자.
// emitPhotoData()로 옮기려고 했던 p.title코드와 emitPhotoData() 호출문을 함께 추출한다.
function zznew(p) {
  return [
    `<p>제목: ${p.title}</p>,
    ${emitPhotoData(p)}`,
  ].join('\n')
}
