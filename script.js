function textInput() {
  let armazena
  let memeText = document.querySelector('#meme-text')
  let textInput = document.querySelector('textarea')
  armazena = textInput.value
  memeText.innerText = armazena
}

let textarea = document.querySelector('textarea')
textarea.addEventListener('keyup', textInput)

function linkClick () {
  document.getElementById('meme-insert').click()
}
let link = document.querySelector('a')
link.addEventListener("click", linkClick)


let inputImage = document.querySelector('#meme-insert')

inputImage.addEventListener('change', function(imagem) {
    let arquivo = imagem.target.files[0];
    let endereco = new FileReader();
    endereco.onloadend = function(){
      document.querySelector('#meme-image').setAttribute('src',endereco.result)
    }
    endereco.readAsDataURL(arquivo)
  })
function buttonFire () {
  let buttonPai = document.querySelector('#buttons')
  let fireButton = document.createElement('button')
  fireButton.id = "fire"
  fireButton.innerHTML = 'Fire'
   buttonPai.appendChild(fireButton)
}
buttonFire()

function buttonWater () {
  let buttonPai = document.querySelector('#buttons')
  let waterButton = document.createElement('button')
  waterButton.id = "water"
  waterButton.innerHTML = 'Water'
   buttonPai.appendChild(waterButton)
}
buttonWater()

function buttonEarth () {
  let buttonPai = document.querySelector('#buttons')
  let earthButton = document.createElement('button')
  earthButton.id = "earth"
  earthButton.innerHTML = 'Earth'
   buttonPai.appendChild(earthButton)
}
buttonEarth()

function fireBorder (event) {
  let image = document.querySelector('#meme-image')
    if (event.target.id == "fire") {
    image.style.border = '3px dashed red'
  } else if ( event.target.id =="water") {
    image.style.border = '5px double blue'
  }else if (event.target.id == "earth") {
    image.style.border = '6px groove green'
  }  
}

let buttons = document.querySelector('#buttons')
buttons.addEventListener('click', fireBorder)



// const fileSelect = document.getElementById("fileSelect"),
//   fileElem = document.getElementById("fileElem");

// fileSelect.addEventListener("click", function (e) {
//   if (fileElem) {
//     fileElem.click();
//   }
// }, false);