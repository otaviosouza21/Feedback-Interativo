let hate1 = document.getElementById("hate1");
let hate2 = document.getElementById("hate2");
let hate3 = document.getElementById("hate3");
let hate4 = document.getElementById("hate4");
let hate5 = document.getElementById("hate5");
let submit = document.querySelector(".enviar");
let resultado;

function aciona1() {
  hate1.classList.toggle("escala");

  hate5.classList.add("escala");
  hate2.classList.add("escala");
  hate3.classList.add("escala");
  hate4.classList.add("escala");
  resultado = 1
  return resultado;
}

function aciona2() {
  hate2.classList.toggle("escala");

  hate1.classList.add("escala");
  hate3.classList.add("escala");
  hate4.classList.add("escala");
  hate5.classList.add("escala");

  resultado = 2;
  return resultado;
}

function aciona3() {
  hate3.classList.toggle("escala");

  hate1.classList.add("escala");
  hate2.classList.add("escala");
  hate4.classList.add("escala");
  hate5.classList.add("escala");

  resultado = 3;
  return resultado;
}

function aciona4() {
  hate4.classList.toggle("escala");

  hate1.classList.add("escala");
  hate2.classList.add("escala");
  hate3.classList.add("escala");
  hate5.classList.add("escala");

  resultado = 4;
  return resultado;
}

function aciona5() {
  hate5.classList.toggle("escala");

  hate1.classList.add("escala");
  hate2.classList.add("escala");
  hate3.classList.add("escala");
  hate4.classList.add("escala");

  resultado = 5;
  return resultado;
}

function envia() {

  if(resultado != null){
  document.querySelector(".conteiner").style.display = "none";
  document.querySelector(".thank-you").style.display = "flex";
  }
 
  document.querySelector(".resul").innerHTML = resultado;
}



hate1.addEventListener("click", aciona1);
hate2.addEventListener("click", aciona2);
hate3.addEventListener("click", aciona3);
hate4.addEventListener("click", aciona4);
hate5.addEventListener("click", aciona5);
submit.addEventListener("click", envia);
