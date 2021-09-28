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
  constructor(nombre) {
      this.nombre = nombre
      this.reserva = ""
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

  do {
      username = prompt("Ingrese Nombre de Usuario")
      if(username == "")
          alert("El username no puede ser vacio")
  }while(username == "")

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
  let operacion = 0
  while(operacion != 3) {
      operacion = parseInt(prompt("------- Bienvenido "+ usuarioLogueado.nombre + " --------\n1. Reservar\n2. Mis Reservas\n3. Cerrar sesion"))

      let textoMenu

      switch(operacion) {
          case 1:
              textoMenu = "- Que cancha quieres reservar? -\n"
              for (let i = 0; i < canchas.length; i++) {
                  const cancha = canchas[i];

                  textoMenu = textoMenu + (i+1) + ". " + cancha.nombre + "\n"
              }
              let nCancha = prompt(textoMenu)

              if(nCancha > 0 && nCancha <= canchas.length)
                  canchas[nCancha-1].reservar(usuarioLogueado.username)
              else
                  alert("Numero de cancha invalido")
              break;
          case 2:
              textoMenu = "------- Mis Reservas -------\n"
              for (const cancha of canchas.sort(comparaCanchas)) {
                  if(cancha.reserva == usuarioLogueado.username)
                      textoMenu = textoMenu + cancha.nombre + "\n" 
              }
              alert(textoMenu)
              break;
          case 3:
              alert("Cerrando Sesion.")
              break;
      }
  }
  usuarioLogueado = null
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

let operacion = 0
while(operacion != 3) {
  // Imprime el menu principal y espera que escribas en el prompt un numero
  operacion = parseInt(prompt("------- Menu --------\n1. Iniciar sesion\n2. Registrarse\n3. Salir"))

  switch(operacion) {
      case 1:
          login()
          if(usuarioLogueado)
              menuUsuario()
          break;
      case 2:
          registrarse()
          break;
      case 3:
          alert("Hasta luego!")
          break;
  }
}
const productos = [{ jugadores: 1,  nombre: "Messi", equipo: "PSG" },
                  {  jugadores: 2,  nombre: "Di maria", equipo: "PSG"},
                  {  jugadores: 3,  nombre: "Paredes"  , equipo: "PSG"},
                  {  jugadores: 4,  nombre: "Dybala" , equipo: "JUVENTUS"}]
for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3> Nro: ${producto.jugadores}</h3>
                            <p>  Nombres: ${producto.nombre}</p>
                            <b> Equipo: ${producto.equipo}</b>`;
    document.body.appendChild(contenedor);
}


class Nombre {
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Equipo {
    constructor(nombre) {
        this.nombre = nombre;
    }

    mostrarEquipo() {
        const section = document.createElement("section");
        const nombre = document.createElement("h1");
        nombre.textContent = `Bienvenido a ${this.nombre}`;
        section.appendChild(nombre);
        document.body.appendChild(section);
    }
  }


function iniciarPrograma() {
    const equipo = new Equipo(prompt("Nombre Equipo"));
    equipo.mostrarEquipo();
}

iniciarPrograma();