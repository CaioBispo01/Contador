let mostrador = document.getElementById("center-number");
function Diminuir() {
  if (Number(mostrador.innerText) <= 0) {
    return
  }
  mostrador.innerText -= 1;
}
function Resetar() {
  mostrador.innerText = 0;
}
function Aumentar() {
  mostrador.innerText = Number(mostrador.innerText) + 1;
}