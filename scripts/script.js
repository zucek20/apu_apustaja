const displayMeme = document.querySelector('img#meme')
const selectMemes = document.querySelectorAll('div#select>img')
// global memory
let store = "apu1"
let source = "assets/gallery/" + store +".jpg"

// img update
selectMemes.forEach(selectMeme => {
  selectMeme.addEventListener('click', () => {
    let id = selectMeme.id
    store = id
    let source = "assets/gallery/" + store +".jpg"
      displayMeme.src = source
    })
})

