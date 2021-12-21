/*
Dado el siguiente código completar para que muestre en pantalla la cantidad de montos mayores de 500. y también se debe mostrar el número más grande.
el script tendrá que mostrar el siguiente mensaje al final:
La lista tiene x montos totales, de los cuales n son mayores de 500. y m es el número más grande.
donde x es la cantidad de montos totales,
n son los cantidad de montos que superan los 500.
y m es el número más grande.
*/

var montos = [500, 800, 100, 300, 2400, 4310, 5010, 312, 841, 1410, 3030, 330, 510, 501, 499, 5, 610]
let x = montos.length;

var n = 0;
for(let num of montos) {
    if(num > 500) {
        n=n+1;
    }
}

var m = montos[0];
for(let num of montos) {
    if(num > m) {
        m=num;
    }
}
console.log("La lista tiene "+x+" montos totales, de los cuales "+n+" son mayores de 500. y "+m+" es el número más grande.");
