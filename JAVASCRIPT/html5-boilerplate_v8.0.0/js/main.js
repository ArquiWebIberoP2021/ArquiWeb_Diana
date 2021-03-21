

console.log("Mensaje a la consola");
//alert("Hola mundo");

//Tipos de datos
var mensaje = "Es un mensaje";
var count = 1;
var pi = 3.1415;
var esDivertido = true;

console.log(mensaje);
console.log(pi);
console.log(count);
console.log(esDivertido);



//Usando use strict - no te permite utilizar variables no declaradas para código seguro
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


//Diferentes mensajes
console.log(123);
console.log("123");
console.table([1, 2, 3, 4]);
console.warn("ten cuidado");
console.error("Existe un error en tu programa");


//console.clear();

//Pruebas de rendimiento
console.time("sumaArreglo");
let numbers = [5, 6, 7, 3, 2, 5, 5, 6, 3, 2, 5, 6, 32, 2, 353, 43, 2, 2, 3423, 3];
let result = 0;

numbers.forEach(function (num) {
    result += num;

});

console.log(result);
console.timeEnd("sumaArreglo");



//Crear variables
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

//Instanciando al objeto
const menuElemento = document.getElementById("liElemento1");

//console.log(menuElemento.innerText);
//console.log(menuElemento.innerHTML);



//use : https://www.w3schools.com/jsref/jsref_repeat.asp

//Manejo de cadenas
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
console.log(parseInt("A",16));
console.log(parseInt("111010101",2));





