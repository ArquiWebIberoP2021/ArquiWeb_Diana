
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

(function(lenguaje){ //Variables a trabajar
    console.log(`Me invoco automáticamente y estoy trabajando con ${lenguaje}.`);
})("JavaScript"); //Lo que le quiero enviar


