
// Chamei todas minhas paletas de cores.
const firstColor = document.getElementById('box1')
const secondColor = document.getElementById('box2')
const thirdColor = document.getElementById('box3')
const fourthColor = document.getElementById('box4')



// Função para adicionar a classe selected, e remover a mesma da div anterior.
function selectedPallet(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}

// Criei um evento de click pra cada cor, que recebe minha Função selectedPallet.
firstColor.addEventListener('click', selectedPallet);
secondColor.addEventListener('click', selectedPallet);
thirdColor.addEventListener('click', selectedPallet);
fourthColor.addEventListener('click', selectedPallet);


// Criei uma função que adiciona as cores de fundo nos pixel.
function addColors(events) {
  // Essa variavel pega a tag que tiver a classe .selected.
  const selected = document.querySelector('.selected');
  if (selected === firstColor) {
    events.target.style.backgroundColor = 'black';
  } else if (selected === secondColor) {
    events.target.style.backgroundColor = 'blue';
  } else if (selected === thirdColor) {
    events.target.style.backgroundColor = 'green';
  } else if (selected === fourthColor) {
    events.target.style.backgroundColor = 'yellow';
  }
}

// Criei uma variavel para pegar todos as divs que contem a classe .pixel.
const getPixel = document.querySelectorAll('.pixel');

// Depois fiz um for que pega a minha posição de cada pixel, e aplica minha função addColors.
for (let index = 0; index < getPixel.length; index += 1) {
  getPixel[index].addEventListener('click', addColors);
}





function limparPixels(){
  const getPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < getPixel.length; index += 1) {
    getPixel[index].style.backgroundColor = 'white';
  }
}
  

const botaoLimpar = document.getElementById('clear-board')
botaoLimpar.addEventListener('click', limparPixels)
  
  
  
  


// function limparPixels(event){
//   const botaoLimpar = document.getElementById('clear-board')
//   const getPixel = document.querySelectorAll('.pixel');

//   botaoLimpar.addEventListener('click', function(){
//     for (let index = 0; index < getPixel.length; index += 1) {
//       getPixel[index].style.backgroundColor = 'white';
//     }
//   })


// }

// limparPixels()