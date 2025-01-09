const bolinhaElemento = document.querySelector(".bolinha");
let posicao = 0;

function ganhou () {
    setTimeout(() => {
    alert("Parabéns você chegou!!");
    reiniciar() }, 500
    ) 
}

function perdeu () {
  setTimeout(() => {
    alert("Poxa errou , tente novamente.")
    reiniciar()
  }, 500);
}
function moverBolinha(event) {
  console.log(event)
  if (event.keyCode == 39) {
    posicao += 10;
    // mover a bolinha
    bolinhaElemento.style.marginLeft = `${posicao}px`;
    if (posicao == 400) {
    ganhou()
  }
}
}
document.addEventListener("keydown", moverBolinha);

function reiniciar () {
  posicao = 0 
  bolinhaElemento.style.marginLeft = `${posicao}px`;
  } 


function girar () {
  posicao = Math.random() * 400
  bolinhaElemento.style.marginLeft = `${posicao}px`;
  if(posicao == 400) {
    ganhou()
  }else {
    perdeu()
  }

}