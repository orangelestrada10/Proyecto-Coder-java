//let nombre = prompt("Ingrese su nombre");
//alert(nombre);    
//let apellido = prompt("Ingrese Su Apellido");
//alert(apellido);
//let edadUsuario = prompt("Ingrese su edad");
//let edad = parseInt(edadUsuario);
//let numero = 20;
//console.log(edad+numero);

let usuario = "usuario"
let contraseña = "contraseña"
let usuarioIngresado = prompt("Ingrese Nombre Usuario");
let contraseñaIngresada = prompt("Ingrese Contraseña");

if (usuarioIngresado == usuario && contraseñaIngresada == contraseña) {
    alert ("Bienvenido");
}
else{
    alert("No se pudo ingresar");
}

let menuDia = prompt("Ingrese su menu");
if (menuDia = "Hamburguesa"){
    alert("Si es el menu de el dia")
}
else if (menuDia = "pollo"){
    alert("No es menu de el dia");
}
else {
    alert("No es menu de el dia");
}

let edadUsuario = prompt("Ingrese su edad");
let edad = parseInt(edadUsuario);
if(20 == edad ){
    alert("puedes entrar")
}

else{
    alert("No puedes Entrar")
}