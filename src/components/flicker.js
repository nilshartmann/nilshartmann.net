import AllFlickrImages from './flicker-images'

function shuffle(array) {
  let currentIndex = array.length
  let temporaryValue
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const allFlickrImages = shuffle([...AllFlickrImages])
let flickrImagesIndex = 0

export function getFlickrImages(count = 6) {
  // todo: handle overflow
  const currentIndex = flickrImagesIndex
  flickrImagesIndex = currentIndex + count
  return allFlickrImages.slice(currentIndex, flickrImagesIndex)
}
