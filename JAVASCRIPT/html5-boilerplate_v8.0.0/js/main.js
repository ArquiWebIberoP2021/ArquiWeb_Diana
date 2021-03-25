/*
console.log("Mensaje a la consola");
//alert("Hola mundo");

//-------------------Tipos de datos
var mensaje = "Es un mensaje";
var count = 1;
var pi = 3.1415;
var esDivertido = true;

console.log(mensaje);
console.log(pi);
console.log(count);
console.log(esDivertido);



//-------------------Usando use strict - no te permite utilizar variables no declaradas para código seguro
//"use strict";


var main = function () {
    "use strict";

    var mensaje = "HOLA MUNDO!",
        count = 1,
        pi = 3.1416,
        esDivertido = true;


    console.log(mensaje)
}

main();


//-------------------Diferentes mensajes
console.log(123);
console.log("123");
console.table([1, 2, 3, 4]);
console.warn("ten cuidado");
console.error("Existe un error en tu programa");


//console.clear();

//-------------------Pruebas de rendimiento
console.time("sumaArreglo");
let numbers = [5, 6, 7, 3, 2, 5, 5, 6, 3, 2, 5, 6, 32, 2, 353, 43, 2, 2, 3423, 3];
let result = 0;

numbers.forEach(function (num) {
    result += num;

});

console.log(result);
console.timeEnd("sumaArreglo");



//-------------------Crear variables
// Ya no se utiliza var, ahora es let y const

"use strict";

var unaVariable;
let nombre;

console.log(nombre);
nombre = "Diana";

console.log(nombre);

nombre = "Laura"
console.log(nombre);


//Var nos permite declarar dos veces una variable y let no te lo permite, por eso es más recomendable

const PI = 3.1416;

console.log(PI);

//-------------------Instanciando al objeto
//const menuElemento = document.getElementById("liElemento1");

//console.log(menuElemento.innerText);
//console.log(menuElemento.innerHTML);



//use : https://www.w3schools.com/jsref/jsref_repeat.asp

//-------------------Manejo de cadenas
let nombreS;
nombreS = "Diana";

let esBueno = "Me gusta ";
let lenguaje = "JavaScript";

console.log(esBueno + lenguaje);

let grupo = "Justin Bieber";
let cancion = "Die for you";

console.log(grupo.length);

grupo = grupo.concat(" ", ": es muy bueno", " ", "Y me gusta mucho");
grupo = grupo.toUpperCase();

console.log(grupo);

let separar = grupo.split(" ");
console.log(separar);
console.table(separar);

//Ejemplo de : 

//Replace();
let str = "Hola mundo";
let res = str.replace("mundo", "Diana");

console.log(str);
console.log(res);

//Includes();
let n = res.includes("Aviles");
console.log(n);
let s = res.includes("Hola");
console.log(s);

//Repeat();
console.log(res.repeat(3));

//Number(); - > es para convertir tipos
let folios = "1503.3535ewgjvoie34543ejbew";
console.log(Number(folios));

//ParseInt() y ParseFloat() - > son para extraer un número de un string
console.log(parseInt(folios));
console.log(parseFloat(folios));
//conversiones
console.log(parseInt("A", 16));
console.log(parseInt("111010101", 2));

//----Otros métodos

//toFixed(); -> El número de digitos a utilizar
let test = 128.234232;
console.log(test);
console.log(test.toFixed(3));

//toString();
console.log(test.toString());
//date();
console.log(Date());

//Tipos de datos

let lenguajes = ["HTML5", "JS", "PHP"];
console.log(typeof (lenguajes));

let numero = 1234;
console.log(typeof (numero));

//-------------------Declaración de un objeto
let persona = {
    nombre: "Diana",
    aPaterno: "Aviles"
}

console.log(typeof (persona));

//----Instancia
let fecha = new Date();
console.log(fecha);
console.log(typeof (fecha));

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.table(numeros);

let meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio");
console.log(meses);
console.log(typeof (meses));
console.log(meses[2]);
console.log(meses.length);

console.log(Array.isArray(meses));
console.log(Array.isArray(persona));

//----Ejemplos de otros métodos para arreglos

//-> Push() agrega un elemento al último y cambia en length del arreglo
console.log(meses.push("Julio", "Agosto"));

//->unshift(); -> agrega un elemento al principio del arreglo cambiando el length del arreeglo
console.log(meses.unshift("Diciembre"));

//-> pop(); -> Elimina el ultimo elemento del arreglo y lo regresa
console.log(meses.pop());

//->shift(); -> Elimina el primer elemento y lo regresa 
console.log(meses.shift());

//->splice(); -> elimina/agrega los elementos poniendo un inicio y un final y regresa los elementos eliminados
console.log(meses);
console.log(meses.splice(3, 2, "Mes 4", "Mes 5"));
console.log(meses);

//->reverse(); -> Ordena alreves los elementos del arreglo
console.log(meses.reverse());

//->sort(); -> Ordena alfabeticamente o por por numero (ascendente o descendente)
console.log(meses.sort());

console.clear();


//-------------------Objejtos LITERALES

const persona = {
    nombre: "Diana",
    aPaterno: "Aviles",
    edad: 22,
    trabaja: false,
    libros: ["Saga Crepusculo", "Pricipito"],
    domicilio: {
        calle: "Otomies",
        numeroExterior: 225,
        numeroInterior: "lt4",
        municipio: "Ecatepec de Morelos"
    }
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.domicilio.municipio);
console.log(persona.libros);
console.log(persona.libros[1]);
console.table(persona);

//Otra forma de acceder
console.log(persona["domicilio"]["calle"]);

console.clear();

->*/

/*->
//-------------------Template strings

//Antes
const nombre = "Diana",
    trabajo = "Supervisora CCA";

console.log("Nombre: " + nombre + " Trabajo como: " + trabajo);

//Ahora con template
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);


//usando query selector
const contenedorTexto = document.querySelector("#secMensaje");

let lista = '<ul>' + '<li>Nombre: ' + nombre + '</li>'
    + '<li>Trabajo: ' + trabajo + '</li>' + '<ul>';

contenedorTexto.innerHTML = lista;

//USO DE TEMPLATE STRINGS
lista = `<ul>
            <li> Nombre1: ${nombre}</li>
            <li> Trabajo1: ${trabajo}</li>
        </ul>`;

contenedorTexto.innerHTML = lista;



//------------------- Function Declaration

/*function saludar() {
console.log("Hola");
}

saludar();
*/

/*
saludar();

function saludar(nombre,trabajo = "No sabemos!"){
    console.log(`Hola ${nombre} y trabajo ${trabajo}`);
}

saludar("Diana Aviles");
saludar("Diana", "CCA");
*/
/*
//------------------- Function expression -> primero declaro funcion y luego ejecuto
const hola = function(){
    alert("hola a todos");
}

hola();
*/

//---- otro ejemplo
/*
const suma = function(a = 0, b= 0){
    console.log(a+b);
}

suma();
suma(20,10);
suma(100,150);
*/

//Para optimizar espacio: https://javascript-minifier.com/;



//------------------- IIFE FUNCIONES QUE SE INVOCAN AUTOMATICAMENTE
/*>>>>>>>>>>>>
(function (lenguaje) { //Variables a trabajar
    console.log(`Me invoco automáticamente y estoy trabajando con ${lenguaje}.`);
})("JavaScript"); //Lo que le quiero enviar

console.clear();

//------------------- Métodos de propiedad (Función dentro de un objeto) --> Metodos en OO
const musica = {

    reproducir: function (cancion) {
        console.log(`Reproduciendo la canción: ${cancion}`);
    },

    pausar: function () {
        console.log("Pausa.....");
    }

}

musica.reproducir("10,000 hours");
musica.reproducir("Monster");
musica.reproducir("Justice");
musica.pausar();

console.clear();

//------------------- Declarar métodos fuera del objeto (mala practica)
musica.borrar = function (id) {
    console.log(`Borramos canción con id: ${id}`);
}

musica.borrar(2);
// Puede generar código spagueti

//------------------- Function que regresan un valor
const resta = function (a = 0, b = 0) {
    return a - b;
}

let resultado = resta(30, 20);
console.log(resultado);

console.clear();

//------------------- Arrow function
const restaAF = (a = 0, b = 0) => a - b;
resultado = restaAF(40, 20);
console.log(resultado);

console.clear();

//--- si es solo un parametro, se quita el parentesis
const multiAF = numero => numero * 10;
let total = multiAF(30);
console.log(total);
>>>>>>>>>>>*/
//Ejercicio, adaptar el siguiente código a lo nuevo aprendido

/*
var viajando = function(destino){
    return "viajanado a la cidad de: " + destino;
}

var viaje;

viaje = viajando("Londres");
console.log(viaje);

viaje = viajando("Paris");
console.log(viaje);
*/
//manera optimizada

//1
/*
const viajando = destino => `viajando a la ciudad de ${destino}`
let viaje1 = viajando("Londres");
let viaje2 = viajando("Paris");

console.log(viaje1);
console.log(viaje2);
*/

/*
//2
(function(viaje1,viaje2){
    console.log(`Viajando a la ciudad de ${viaje1} y ${viaje2}`);
})("Londres","Paris");
*/

/*
//3
(function(viaje1,viaje2){

    console.log(`Viajando a la ciudad de ${viaje1}`);
    console.log(`Viajando a la ciudad de ${viaje2}`);

})("Londres","Paris");
*/


//------------------- Object literal más complejo
/*
const persona = {
    nombre: "Diana",
    edad: 22,
    anioNacimiento: function(){
        return new Date().getFullYear() - this.edad;
    }
};


console.log(persona.anioNacimiento());

console.clear();

//------------------- Object constructor
function Tarea(nombre,urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;

}

const tarea1 = new Tarea("Aprender ionic", "URGENTE");
const tarea2 = new Tarea("Aprender Go","MUY BAJA");

console.log(tarea1);
console.log(tarea2);


//------------------- Clases nuevas en JavaScript
class Tarea {
    constructor(nombre, urgencia) {
        this.nombre = nombre;
        this.urgencia = urgencia;
    }
};

const tarea1 = new Tarea("Aprender ionic", "URGENTE");
const tarea2 = new Tarea("Aprender Go", "MUY BAJA");

console.log(tarea1);
console.log(tarea2);

//usar babel para que sirva en todos los navegadores: https://babeljs.io/

//------------------- Iteradores
//--for(); -> Ejemplos
for (let i = 0; i < 10; i += 2) {
    console.log(`Iteración for : ${i}`);
}

//breaks
for (i = 0; i < 12; i++) {
    if (i === 3) { break }
    console.log(`Contador con breaks: ${i}`);
}

//Continue
for (y = 0; y < 12; y++) {
    if (y === 3) { continue }
    console.log(`Contador con continue: ${y}`);
}

//--while(); -> Ejemplos
let x = 0;
while (x < 10) {
    console.log(`Iteración while: ${x}`);
    x++;
}
//----forEach();
myArray = ["Inuyasha", "Kagome", "Kikyo", "Naraku", "Miroku"];

myArray.forEach((element, index, array) => {
    console.table(index, element);
});


//----Map(); -> Crea un nuevo array con los resultados de la llamada a la función indicada, aplicados a cada uno de sus elementos
const numeros = [2,5,7];
const potencias = numeros.map((numero) => Math.pow(numero,2));
console.log(potencias);

//Usar map(), reduce() y filter() para tener código más limpio

//reduce() -> retorna la función (recursión)
const suma = [10,20,30].reduce((a,b) => a + b);
console.log(suma);



//Checa si hay nombres iguales, 
const nombres = ["Diana", "Juan", "Emiliano", "Vanessa", "Hans","Juan","Diana","Diana"];

const cantidadNombres = nombres.reduce((contadorNombre,nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    return contadorNombre;
}, {});

console.log(cantidadNombres);

console.clear();

//filter() -> filtras los elementos que deseamos en un nuevo array (DEPENDE DEL LOS CRITERIOS)
let numbers = [1,3,4,5,6,10,11,2,2,2,1,1,3,21,4,5,5];

let newNumbers = numbers.filter(number => number > 10);
console.log(newNumbers);


//------------------- SCOPE - ALCANCE 
//"use Strict"

let musica2 = "Pop";

if(musica2){
    let musica2 = "Acustico";
    console.log(`Dentro del if ${musica2}`);
}

console.log(`Èl valor de la variable música fuera del if: ${musica2}`)


//------------------- Object destructuring: la forma en como se extraen valores de  un objeto
const cliente = {
    nombre: "Diana",
    tipo: "Premium",
    datos: {
        ubicacion: {
            ciudad: "México",
            pais: "Méxicoo"
        },
        cuenta: {
            desde: "11-04-2020",
            saldo: 5000
        }
    },
    gustos: {
        deportes: ["Bicicleta", "Gym", "Baile"]
    }
};

console.log(cliente);

//Anterior
const nombreCliente = cliente.nombre,
    tipoCliente = cliente.tipo;

console.log(nombreCliente);
console.log(tipoCliente);

//Ahora con Object destructuring
let { nombre,
      tipo, 
      datos: { 
          ubicacion: { ciudad }, 
          cuenta: {saldo} 
        }, 
      gustos: { deportes } 
    } = cliente;


/*console.log(nombre);
console.log(tipo);
console.log(ciudad);
console.log(saldo);
console.log(deportes[1]);
*/

//console.log(nombre,tipo,ciudad,saldo,deportes[1]);


//------------------- Object Literal Enhacement: Se usa para unir objetos.

/*
const banda = "Metallica",
      genero = "Heavy Metal",
      canciones = ["Master of Puppets","Seek & Destroy", "Enter SandMan"];


//antes
/*
const metallica = {
    banda: banda,
    genero: genero,
    canciones:canciones
};

console.log(metallica);
*/

//ahora

/*
const metallica = {banda,genero, canciones}
console.log(metallica);
*/

//reduce()
const suma = [10,20,30].reduce((a,b) => a + b);
console.log(suma);



//Checa si hay nombres iguales, 
const nombres = ["Diana", "Juan", "Emiliano", "Vanessa", "Hans","Juan","Diana","Diana"];

const cantidadNombres = nombres.reduce((contadorNombre,nombre) => {
    contadorNombre[nombre] = (contadorNombre[nombre] || 0) + 1;
    return contadorNombre;
}, {});




//filter() -> filtras los elementos que deseamos en un nuevo array (DEPENDE DEL LOS CRITERIOS)
let numbers = [1,3,4,5,6,10,11,2,2,2,1,1,3,21,4,5,5];

let newNumbers = numbers.filter(number => number > 10);
console.log(newNumbers);


//find();
const personas = [
    {nombre: "Antonio", edad: 42},
    {nombre: "César", edad: 21},
    {nombre: "Mariana", edad: 20},
    {nombre: "Steve", edad: 23, aprendido: "Javascript"},
    {nombre: "Jair", edad: 22}

];

console.log(personas);

//Obtener las personas mayores de 21 años
const mayores = personas.filter(persona => persona.edad > 21);
console.log(mayores);

//Extraer información de Mariana
const mariana = personas.find(persona => persona.nombre === "Mariana");
console.log(mariana);

//Reduce- Obtiene un acumulado de registros
let totalR = personas.reduce((edadTotal,persona)=> {
    return edadTotal + persona.edad;
},0); // 0 es a partir de qué número voy a iniciar, se puede cambiar para ver la diferencia
console.log(totalR);

//promedio edad
console.log(totalR/personas.length);



/* FETCH API */
