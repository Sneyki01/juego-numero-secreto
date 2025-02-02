// la variable numeroSecreto la asignamos para generar un numero secreto deacuerdo a la funcion escrita mas abajo
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10

/*variable para llamar a la funcion, La funcion se llama asignarTextoElemento y entre parentesis 
cerramos las acciones que hara, lo primero es el elemento que vamos a seleccionar, ya sea header o parrafo, despues
el texto, que es lo que pondremos en el elemento seleccionado. para poderla funcion esta programada para seleccionar
el elemento como queryselector y el texto para innerHTML */
function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/* la funcion verificarIntento la llamamos desde el index para la funcion del boton, en el Index al seleccionar que hace
al "onclick" nos da a entender que hara cuando hagamos click, Aqui es donde se da la indicacion sobre que hacer cuando
se hace la accion. Al mismo tiempo creamos una varaible numeroDeUsuario la cual se le asigna la funcion parseInt para
que el valor lo convierta en un NUMERO y no un string, se obtiene el elemento del documento por el titulo 'valor usuario'
el cual asignamos al input que esta (la cajita blanca de texto)*/
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
     //console.log(`el numero secreto es ${numeroSecreto}`);
     //console.log(`El usuario lleva ${intentos} intentos`);
        if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero! lo hicisite en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
       } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero secreto es menor');
            } else {
                asignarTextoElemento('p', 'El numero secreto es mayor');
            }
            intentos++;
            limpiarCaja();
       }
    return;
}

/*creamos la funcion para limpiar el cuadro de texto, llamamos la funcion limpiarCaja y le damos los valores al poner '' en blanco
quiere decir que se va a quedar en blanco el texto*/
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
}

/*la funcion generar numero secreto es lo que hicimos en el proyecto pasado, en donde en base a una operacion
matematica, 
*/
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //console.log(numeroGenerado);
    //console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'ya se han sorteado todos los numeros posibles, Gracias por jugar')
    } else {
        //si el numero generado esta incluido en la lista haremos una cosa, si no, haremos otra
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
        
}

/* esta funcion estamos guardando las condiciones generales del juego, el mensaje inicial tanto en header como
en parrafo, generamos un nuevo numero secreto y reiniciamos el numero de intentos a 1*/
function condicionesIniciales() {
    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

/*Esta funcion va a reiniciar todo el juego, es decir limpiar la caja, reiniciar el numero de intentos
    indicar mensaje de inicio, generar numero aleatorio y deshabilitar el boton de nuevo juego*/
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

/*Aqui estamos llamando a la funcion asignada al inicio, asignarTextoElemento, al hacer eso ahorramos 3 lineas de codigo
pues ahora solamente llamamos a la funcion establecida previamente, y solo indicamos en el primer parentesis el elemento
que vamos a modificar y en la segunda parte el texto que vamos a agregar*/
//asignarTextoElemento('h1', 'juego del numero secreto');
//asignarTextoElemento('p', 'indica un numero del 1 al 10')
condicionesIniciales();