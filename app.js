let nuemroSecreto = generarNumeroSecreto();
console.log(nuemroSecreto);
function asignarTextoElemento(elemento, texto){
    let elemntoHTML = document.querySelector(elemento);
    elemntoHTML.innerHTML = texto;

}
 function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
 }

asignarTextoElemento('h1', 'juego del numero secreto');
asignarTextoElemento('p', 'indica un numero del 1 a 120')

