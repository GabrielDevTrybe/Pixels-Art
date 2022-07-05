const firstColor = document.getElementsByClassName('color')[0]
const secondColor = document.getElementsByClassName('color')[1]
const thirdColor = document.getElementsByClassName('color')[2]
const fourthColor = document.getElementsByClassName('color')[3]
const pixels1 = document.getElementsByClassName('pixel')[0];
const pixels2 = document.getElementsByClassName('pixel')[1];
const pixels3 = document.getElementsByClassName('pixel')[2];
const pixels4 = document.getElementsByClassName('pixel')[3];
const pixels5 = document.getElementsByClassName('pixel')[4];
const pixels6 = document.getElementsByClassName('pixel')[5];
const pixels7 = document.getElementsByClassName('pixel')[6];
const pixels8 = document.getElementsByClassName('pixel')[7];
const pixels9 = document.getElementsByClassName('pixel')[8];
const pixels10 = document.getElementsByClassName('pixel')[9];
const pixels11 = document.getElementsByClassName('pixel')[10];
const pixels12 = document.getElementsByClassName('pixel')[11];
const pixels13 = document.getElementsByClassName('pixel')[12];
const pixels14 = document.getElementsByClassName('pixel')[13];
const pixels15 = document.getElementsByClassName('pixel')[14];
const pixels16 = document.getElementsByClassName('pixel')[15];
const pixels17 = document.getElementsByClassName('pixel')[16];
const pixels18 = document.getElementsByClassName('pixel')[17];
const pixels19 = document.getElementsByClassName('pixel')[18];
const pixels20 = document.getElementsByClassName('pixel')[19];
const pixels21 = document.getElementsByClassName('pixel')[20];
const pixels22 = document.getElementsByClassName('pixel')[21];
const pixels23 = document.getElementsByClassName('pixel')[22];
const pixels24 = document.getElementsByClassName('pixel')[23];
const pixels25 = document.getElementsByClassName('pixel')[24];
const allpixels = document.getElementsByClassName('pixel');



function addClass() {
  firstColor.addEventListener('click', function () {
    firstColor.classList.add('selected')
    secondColor.classList.remove('selected')
    thirdColor.classList.remove('selected')
    fourthColor.classList.remove('selected')
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')
    }

  })

  secondColor.addEventListener('click', function () {
    secondColor.classList.add('selected')
    firstColor.classList.remove('selected')
    thirdColor.classList.remove('selected')
    fourthColor.classList.remove('selected')
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')
    }



  })

  thirdColor.addEventListener('click', function () {
    thirdColor.classList.add('selected')
    firstColor.classList.remove('selected')
    secondColor.classList.remove('selected')
    fourthColor.classList.remove('selected')
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')
    }



  })

  fourthColor.addEventListener('click', function () {
    fourthColor.classList.add('selected')
    firstColor.classList.remove('selected')
    secondColor.classList.remove('selected')
    thirdColor.classList.remove('selected')
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')
    }


  })


}

addClass()


// Adicionando cores em pixel

function addColorBlack() {
  pixels1.addEventListener('click', function () {
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')
    }
    pixels1.classList.add('color')
  })


  pixels2.addEventListener('click', function () {
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')
    }
    pixels2.classList.add('color')
  })




  pixels3.addEventListener('click', function () {
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')

    }
    pixels3.classList.add('color')
  })

  pixels4.addEventListener('click', function () {
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')

    }
    pixels4.classList.add('color')




  })

  pixels5.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels5.classList.add('color')

  })

  pixels6.addEventListener('click', function () {
    for (let index = 0; index < allpixels.length; index += 1) {
      let position5 = allpixels[index]
      position5.classList.remove('selected')

    }
    pixels6.classList.add('color')
  })

  pixels7.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels7.classList.add('color')
  })

  pixels8.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels8.classList.add('color')
  })

  pixels9.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels9.classList.add('color')
  })

  pixels10.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels10.classList.add('color')
  })

  pixels11.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels11.classList.add('color')
  })

  pixels12.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels12.classList.add('color')
  })

  pixels13.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels13.classList.add('color')
  })

  pixels14.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels14.classList.add('color')
  })

  pixels15.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels15.classList.add('color')
  })

  pixels16.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels16.classList.add('color')
  })

  pixels17.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels17.classList.add('color')
  })

  pixels18.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels18.classList.add('color')
  })

  pixels19.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels19.classList.add('color')
  })

  pixels20.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels20.classList.add('color')
  })

  pixels21.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels21.classList.add('color')
  })

  pixels22.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels22.classList.add('color')
  })

  pixels23.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels23.classList.add('color')
  })

  pixels24.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels24.classList.add('color')
  })

  pixels25.addEventListener('click', function () {
    for(let index = 0; index < allpixels.length; index += 1){
      let position5 = allpixels[index]
      position5.classList.remove('selected')
      
    }
    pixels25.classList.add('color')
  })




}

addColorBlack()



//////////////////////////////////////


