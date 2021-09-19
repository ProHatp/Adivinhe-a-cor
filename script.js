const localCor = document.querySelector('#local-color');
const coresCriadas = document.querySelector('#local-para-cores');
const resultaContainer = document.querySelector('#resultado-click');
const localButton = document.querySelector('#local-button');
const localPontos = document.querySelector('.local-pontos');

const rgbCreate = document.createElement('h1');
rgbCreate.id = 'rgb-color';
localCor.appendChild(rgbCreate);

const resultado = document.createElement('h1');
resultado.id = 'answer';
resultado.innerText = 'Escolha uma cor';
resultaContainer.appendChild(resultado);

function gerarColor() {
  const arrayColors = [];
  for (let i = 0; i < 3; i += 1) {
    const number = Math.random() * 255;
    arrayColors.push(Math.floor(number));
  }
  return `rgb(${arrayColors[0]}, ${arrayColors[1]}, ${arrayColors[2]})`;
}

const pontos = document.createElement('li');
pontos.innerText = '0';
pontos.id = 'score';
localPontos.appendChild(pontos);

function clickColor(event) {
  const elemento = event.target;
  const colorElemento = elemento.style.backgroundColor;
  if (colorElemento === rgbCreate.innerText) {
		resetarJogo();
    resultado.innerText = 'Acertou!';
    resultado.style.color = 'green';
    let result = parseInt(pontos.innerText, 10);
    result += 3;
    pontos.innerText = result;
  } else {
		resetarJogo();
    resultado.innerText = 'Errou! Tente novamente!';
    resultado.style.color = 'red';
  }
}

function criarColor() {
  const arrayRandom = [];
  for (let i = 0; i < 6; i += 1) {
    const colorR = gerarColor();
    const color = document.createElement('li');
    color.className = 'ball';
    color.style.backgroundColor = colorR;
    coresCriadas.appendChild(color);
    arrayRandom.push(colorR);
    color.addEventListener('click', clickColor);
  }
  const colorGerada = arrayRandom[Math.floor(Math.random() * arrayRandom.length)];
  rgbCreate.innerText = colorGerada;
}
criarColor();

function resetarJogo() {
  coresCriadas.innerHTML = '';
  criarColor();
  resultado.innerText = 'Escolha uma cor';
}

const buttonReset = document.createElement('button');
buttonReset.innerText = 'Resetar Jogo';
buttonReset.className = 'btn btn-success';
buttonReset.id = 'reset-game';
localButton.appendChild(buttonReset);
buttonReset.addEventListener('click', resetarJogo);
