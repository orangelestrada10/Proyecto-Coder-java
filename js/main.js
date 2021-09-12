const suma = (a,b) => a+b;

const resta = (a,b) => a-b;

const iva = (x) => x*0.21;

const descuento = (x) => x*0.15;

const cuotas = (x,nCuotas) => x / nCuotas;


function procesarProducto(nombre, valor, numeroCuotas){
    console.log(nombre + " con iva: " + suma(valor,iva(valor)) + "$");
    console.log(nombre + " con descuento del 15%: " + resta(valor,descuento(valor)) + "$" );
    if(numeroCuotas == 1)
        console.log(nombre + " a " + numeroCuotas + " cuota: " + cuotas(valor,numeroCuotas));
    else
        console.log(nombre + " a " + numeroCuotas + " cuotas: " + cuotas(valor,numeroCuotas));
}

let sumaNeta = 0;

for (let i = 1; i <= 3; i++) {
    let producto = prompt("Ingrese el nombre del producto " + i );
    let valorProducto = parseInt(prompt("Ingrese el valor del producto " + i ));
    let mesesCuotas = parseInt(prompt("Ingrese la cantidad de cuotas deseadas"));
    procesarProducto(producto,valorProducto,mesesCuotas);

    sumaNeta = sumaNeta + valorProducto; 
}

console.log("Suma total: "+ sumaNeta)
console.log("Suma total con iva: "+ suma(sumaNeta, iva(sumaNeta)))
console.log("Suma total con descuento del 15%: "+ resta(sumaNeta, descuento(sumaNeta)))
