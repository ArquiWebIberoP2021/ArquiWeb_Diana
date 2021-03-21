/*
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

*/

//Usando use strict - no te permite utilizar variables no declaradas para código seguro
//"use strict";


var main = function(){
    "use strict";

    var mensaje = "HOLA MUNDO!",
    count = 1, 
    pi = 3.1416,
    esDivertido = true;


    console.log(mensaje)
}

main();


/*//Diferentes mensajes
console.log(123);
console.log("123");
console.table([1,2,3,4]);
console.warn("ten cuidado");
console.error("Existe un error en tu programa");
*/

//console.clear();

/*//Pruebas de rendimiento
console.time("sumaArreglo");
    let numbers = [5,6,7,3,2,5,5,6,3,2,5,6,32,2,353,43,2,2,3423,3];
    let result = 0;

    numbers.forEach(function(num){
        result += num;

    });

console.log(result);
console.timeEnd("sumaArreglo");
*/


