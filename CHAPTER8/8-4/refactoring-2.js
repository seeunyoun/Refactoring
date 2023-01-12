// renderPerson()은 그래도 둔 채
// listRecentPhotos()가 위치 정보를 다르게 렌더링 하도록 만들어야 한다고 해보자.

function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p><br>`)
  renderPhoto(outStream, person.photo)
  // 3. 다음으로 피호출 함수를 호출자들로 한 번에 하나씩 인라인 한다.
  // emitPhotoData(outStream, person.photo)
  emitPhodoData(outStream, photo)
  outStream.write(`<p>위치: ${photo.location}</p><br>`)
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.data > recentDateCutoff())
    .forEach((p) => {
      outStream.write(`<div><br>`)
      // 3. 다음으로 피호출 함수를 호출자들로 한 번에 하나씩 인라인 한다.
      // emitPhotoData(outStream, p)
      emitPhodoData(outStream, p)
      outStream.write(`<p>위치: ${p.location}</p><br>`)
      outStream.write(`</div><br>`)
    })
}

// 4. 원래 함수를 지워 함수 인라인 하기를 마무리 한다.
// function emitPhotoData(outStream, photo) {
//   // 2. 첫 단계로 emitPhotoData()에 남길 코드를 함수로 추출한다.
//   zztmp(outStream, photo)
//   outStream.write(`<p>위치: ${photo.location}</p><br>`)
// }

// 5. zztmp()의 이름을 함수의 원래 이름으로 돌린다.
// 2. 첫 단계로 emitPhotoData()에 남길 코드를 함수로 추출한다.
function emitPhodoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`)
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p><br>`)
}
