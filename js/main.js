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

function menuLogin() {
    document.body.innerHTML =""

    $('body').prepend(`<h1>Iniciar sesion</h1>
                    <form id="formLogin">
                        <label for="username">Nombre de Usuario:</label>
                        <input type="text" id="username" name="username"><br/>
                        <label for="pass">Pass:</label>
                        <input type="password" id="pass" name="pass"><br/><br/>
                        <input type="submit" value="Identificarse">
                    </form>`);

    $("#formLogin").submit(function (e) {
        //Prevenimos el comportamiento de submit 
        e.preventDefault();

        const username = $('#username').val()
        const pass = $('#pass').val()

        let usuario = usuarios.find( user => user.username == username && user.pass == pass )

        if(usuario){
            usuarioLogueado = usuario
            menuUsuario()
        }
        else
            alert("Usuario o contraseña incorrectos")
    });

    botonMenuRegister = document.createElement("button");
    botonMenuRegister.innerHTML = "Registrarse"
        
    botonMenuRegister.addEventListener("click", function() {
        menuRegister()
    });
    document.body.appendChild(botonMenuRegister);

    

}

function menuRegister() {
    document.body.innerHTML =""

    $('body').prepend(`<h1>Registrese</h1>
                    <form id="formRegister">
                        <label for="username">Nombre de Usuario:</label>
                        <input type="text" id="username" name="username"><br/>
                        <label for="pass">Pass:</label>
                        <input type="password" id="pass" name="pass"><br/>
                        <label for="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre"><br/>
                        <label for="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido"><br/>
                        <label for="equipo">Nombre del Equipo:</label>
                        <input type="text" id="equipo" name="equipo"><br/><br/>
                        <input type="submit" value="Registrarse">
                    </form>`);

    $("#formRegister").submit(function (e) {
        //Prevenimos el comportamiento de submit 
        e.preventDefault();

        const username = $('#username').val()
        const pass = $('#pass').val()
        const nombre = $('#nombre').val()
        const apellido = $('#apellido').val()
        const equipo = $('#equipo').val()

        if(username == "" || pass == "" || nombre == "" || apellido == "" || equipo == "")
            alert("Hay uno o mas campos vacios")
        else if(usuarios.find(user => user.username == username))
            alert("Ese username ya esta en uso")
        else {
            usuarios.push(new Usuario(username, pass , nombre, apellido, equipo))
            guardarDatos()
            alert("Usuario registrado con exito!")
            menuLogin()
        }
    });

    botonVolver = document.createElement("button");
    botonVolver.innerHTML = "Volver al inicio de sesion"
        
    botonVolver.addEventListener("click", function() {
        menuLogin()
    });
    document.body.appendChild(botonVolver);
                            
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

$(document).ready(function() {
    leerDatos()
    menuLogin()
});

/*let operacion = 0
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
}*/