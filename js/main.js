class Usuario {
  constructor(username, pass , nombre, apellido, equipo) {
      this.username = username
      this.pass = pass
      this.nombre = nombre
      this.apellido = apellido
      this.equipo = equipo
  }

  ToString() {
      return `Username: ${this.username} \nNombre: ${this.nombre}\nApellido: ${this.apellido}\nEquipo: ${this.equipo}`
  }
}

class Cancha {
    constructor(nombre, reserva = "") {
        this.nombre = nombre
        this.reserva = reserva
    }

    reservar(username){
        if(this.reserva == "")
            this.reserva = username
        else
            alert("La cancha "+ this.nombre + " ya esta reservada")
    }
}

let usuarios = []

let canchas = [
    new Cancha("La Bombonera"),
    new Cancha("Monumental"),
    new Cancha("Estadio Libertadores de America"),
    new Cancha("Camp Nou"),
    new Cancha("Anfield"),
]

let usuarioLogueado

function login() {
    const username = prompt("Introduzca Nombre de Usuario")
    const pass = prompt("Introduzca Contraseña")

    let usuario = usuarios.find( user => user.username == username && user.pass == pass )

    if(usuario)
        usuarioLogueado = usuario
    else
        alert("Usuario o contraseña incorrectos")
}

function registrarse() {
    let username = "", pass = "", nombre = "", apellido = "", equipo = "";

    let EsUsernameInvalido;

    do {
        EsUsernameInvalido = false;
        username = prompt("Ingrese Nombre de Usuario")
        if(username == ""){
            alert("El username no puede ser vacio")
            EsUsernameInvalido = true
        }
        else if(usuarios.find(user => user.username == username)){
            alert("Ese username ya esta en uso")
            EsUsernameInvalido = true
        }   
    }while(EsUsernameInvalido)

    do {
        pass = prompt("Ingrese Contraseña")
        if(pass == "")
            alert("El password no puede ser vacio")
    }while(pass == "")

    do {
        nombre = prompt("Ingrese Nombre")
        if(nombre == "")
            alert("El Nombre no puede estar vacio")
    }while(nombre == "")

    do {
        apellido = prompt("Ingrese Apellido")
        if(apellido == "")
            alert("El apellido no puede ser vacio")
    }while(apellido == "")

    do {
        equipo = prompt("Ingrese Nombre de el equipo")
        if(equipo == "")
            alert("El nombre del equipo no puede ser vacio")
    }while(equipo == "")

    usuarios.push(new Usuario(username, pass , nombre, apellido, equipo))
  
}

function menuUsuario() {

    document.body.innerHTML ="<h1>Bienvenido "+ usuarioLogueado.nombre + "</h1>"

    for (const cancha of canchas) {
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3> Nombre: ${cancha.nombre}</h3>`

        if(cancha.reserva == "") {
            let botonReserva = document.createElement("button");
            botonReserva.innerHTML = "Reservar"
        
            botonReserva.addEventListener("click", function() {
                cancha.reservar(usuarioLogueado.username)
                guardarDatos()
                menuUsuario()
            });
            contenedor.appendChild(botonReserva);
        }
        else 
            contenedor.innerHTML += `<p>Esta Reservado por ${cancha.reserva}</p>`
   
        document.body.appendChild(contenedor);
    }

    let botonMisReservas = document.createElement("button");
    botonMisReservas.innerHTML = "Ver Mis Reservas"

    botonMisReservas.addEventListener("click", function() {
        misReservas()
    });
                            
    document.body.appendChild(botonMisReservas);
}

function misReservas (){
    document.body.innerHTML ="<h1>Mis Reservas</h1>"

    for (const cancha of canchas.sort(comparaCanchas)) {
        if(cancha.reserva == usuarioLogueado.username) {
            let contenedor = document.createElement("div");
            contenedor.innerHTML = `<h3> Nombre: ${cancha.nombre}</h3>`
                                    
            document.body.appendChild(contenedor);
        }
    }

    let botonVolver = document.createElement("button");
    botonVolver.innerHTML = "Volver"

    botonVolver.addEventListener("click", function() {
        menuUsuario()
    });
                            
    document.body.appendChild(botonVolver);
}

function comparaCanchas( a, b ) {
  if ( a.nombre < b.nombre ){
      return -1;
  }
  if ( a.nombre > b.nombre ){
      return 1;
  }
  return 0;
}

function leerDatos(){
    let datos = localStorage.getItem("datos");

    if(!datos) {
        guardarDatos()
    }
    else {
        let datosParseados = JSON.parse(datos); 
        usuarios = []
        canchas = []

        for(usuario of datosParseados.usuarios) {
            usuarios.push(new Usuario(usuario.username, usuario.pass, usuario.nombre, usuario.apellido, usuario.equipo ))
        }
        for(cancha of datosParseados.canchas) {
            canchas.push(new Cancha(cancha.nombre, cancha.reserva))
        }
    }
}

function guardarDatos() {
    let datos = `{"usuarios": ${JSON.stringify(usuarios)}, "canchas": ${JSON.stringify(canchas)} }`
    localStorage.setItem('datos', datos);

    console.log("Se han guardado datos en local Storage")
}

 

leerDatos()
let operacion = 0
while(operacion != 3) {
  operacion = parseInt(prompt("------- Menu --------\n1. Iniciar sesion\n2. Registrarse\n3. Salir"))

  switch(operacion) {
      case 1:
          login()
          if(usuarioLogueado){
            menuUsuario()
            operacion = 3
          }
          break;
      case 2:
          registrarse()
          guardarDatos()
          break;
      case 3:
          alert("Hasta luego!")
          break;
  }
}