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



function addClass() {
  firstColor.addEventListener('click', function(){
    firstColor.classList.add('selected')
    secondColor.classList.remove('selected')
    thirdColor.classList.remove('selected')
    fourthColor.classList.remove('selected')

  })

  secondColor.addEventListener('click', function(){
    secondColor.classList.add('selected')
    firstColor.classList.remove('selected')
    thirdColor.classList.remove('selected')
    fourthColor.classList.remove('selected')



  })
  
  thirdColor.addEventListener('click', function(){
    thirdColor.classList.add('selected')
    firstColor.classList.remove('selected')
    secondColor.classList.remove('selected')
    fourthColor.classList.remove('selected')



  })
  
  fourthColor.addEventListener('click', function(){
    fourthColor.classList.add('selected')
    firstColor.classList.remove('selected')
    secondColor.classList.remove('selected')
    thirdColor.classList.remove('selected')


  })
  
  
}

addClass()


// Adicionando cores em pixel

function addColorBlack() {
  pixels1.addEventListener('click', function(){
    pixels1.classList.add('selected')
  })

  pixels2.addEventListener('click', function(){
    pixels2.classList.add('selected')
  })

  pixels3.addEventListener('click', function(){
    pixels3.classList.add('selected')
  })

  pixels4.addEventListener('click', function(){
    pixels4.classList.add('selected')
  })

  pixels5.addEventListener('click', function(){
    pixels5.classList.add('selected')
  })

  pixels6.addEventListener('click', function(){
    pixels6.classList.add('selected')
  })

  pixels7.addEventListener('click', function(){
    pixels7.classList.add('selected')
  })

  pixels8.addEventListener('click', function(){
    pixels8.classList.add('selected')
  })

  pixels9.addEventListener('click', function(){
    pixels9.classList.add('selected')
  })

  pixels10.addEventListener('click', function(){
    pixels10.classList.add('selected')
  })

  pixels11.addEventListener('click', function(){
    pixels11.classList.add('selected')
  })

  pixels12.addEventListener('click', function(){
    pixels12.classList.add('selected')
  })

  pixels13.addEventListener('click', function(){
    pixels13.classList.add('selected')
  })

  pixels14.addEventListener('click', function(){
    pixels14.classList.add('selected')
  })

  pixels15.addEventListener('click', function(){
    pixels15.classList.add('selected')
  })

  pixels16.addEventListener('click', function(){
    pixels16.classList.add('selected')
  })

  pixels17.addEventListener('click', function(){
    pixels17.classList.add('selected')
  })

  pixels18.addEventListener('click', function(){
    pixels18.classList.add('selected')
  })

  pixels19.addEventListener('click', function(){
    pixels19.classList.add('selected')
  })

  pixels20.addEventListener('click', function(){
    pixels20.classList.add('selected')
  })

  pixels21.addEventListener('click', function(){
    pixels21.classList.add('selected')
  })

  pixels22.addEventListener('click', function(){
    pixels22.classList.add('selected')
  })

  pixels23.addEventListener('click', function(){
    pixels23.classList.add('selected')
  })

  pixels24.addEventListener('click', function(){
    pixels24.classList.add('selected')
  })

  pixels25.addEventListener('click', function(){
    pixels25.classList.add('selected')
  })


}

addColorBlack()



//////////////////////////////////////

const colorBlue = document.getElementById('box2')
const colorGreen = document.getElementById('box3')
const colorYellow = document.getElementById('box4')

function addAllColor() {
  pixels1.addEventListener('click', function(){
    pixels1.id = box2

  })

}

