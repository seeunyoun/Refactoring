function renderPerson(outStream, person) {
  outStream.write(`<p>${person.name}</p><br>`)
  renderPhoto(outStream, person.photo)
  emitPhotoData(outStream, person.photo)
}

function listRecentPhotos(outStream, photos) {
  photos
    .filter((p) => p.data > recentDateCutoff())
    .forEach((p) => {
      outStream.write(`<div><br>`)
      emitPhotoData(oustStream, p)
      outStream.write(`</div><br>`)
    })
}

function emitPhotoData(outStream, photo) {
  outStream.write(`<p>제목: ${photo.title}</p>`)
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p><br>`)
  outStream.write(`<p>위치: ${photo.location}</p><br>`)
}
