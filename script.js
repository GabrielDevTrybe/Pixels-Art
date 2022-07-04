const firstColor = document.getElementsByClassName('color')[0]
const secondColor = document.getElementsByClassName('color')[1]
const thirdColor = document.getElementsByClassName('color')[2]
const fourthColor = document.getElementsByClassName('color')[3]



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





// function removeClass(event) {
//   const pixels = document.querySelectorAll('.selected');
// pixels.classList.remove('selected')


// }

// pixels.addEventListener('click', removeClass)