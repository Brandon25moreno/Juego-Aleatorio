/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

let numeroSecreto = 0;
let intentos = 0; 
let listaNumerosSorteados = [];
let numeroMaximo= 4;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento () {
    let nuemroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos)

    if (nuemroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Felicitaciones, acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(nuemroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor');
        }else{
            asignarTextoElemento('p','El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja (){
    document.getElementById('valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let nuemoroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(nuemoroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se Sortearon todos los números posibles, reinicia el juego');
        document.getElementById('intento').setAttribute('disabled',true)
    }else{
        if (listaNumerosSorteados.includes(nuemoroGenerado)){
            return generarNumeroSecreto()
        }else{
            listaNumerosSorteados.push(nuemoroGenerado);
            return nuemoroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    //crear numero secreto nuevo 
    numeroSecreto = generarNumeroSecreto();
    //Inicilizar nuemero de intentos
    intentos = 1;
}

function reiniciarJuego(params) {
    //limpiar la caja
    limpiarCaja();
    //indicar condiciones de inicio (mensajes nuevos, numero secreto nuevo y reinicio de intentos)
    condicionesIniciales();
    //deshabilitar boton de nuevo juego 
    document.getElementById('reiniciar').setAttribute('disabled',true);
    
}

condicionesIniciales();


