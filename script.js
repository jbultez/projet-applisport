var age ;
var taille ;
var poids ;
var imc ;
function yourAge () {
  age = document.getElementById('age').value;
}
function yourHeight () {
  taille = document.getElementById('taille').value;
}
function yourWeight () {
 poids = document.getElementById('poids').value;
}
function calculImc() {
  imc = Math.round(poids / ((taille/100)* (taille/100)));
  document.getElementById('imc').innerHTML = imc;
}
