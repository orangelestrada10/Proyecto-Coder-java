class Paciente {
    constructor(nombre, apellido, vacuna, documento){
        this.nombre = nombre;
        this.apellido = apellido;
        this.vacuna = vacuna;
        this.documento = documento; 
    }
    viajar(continente){
        switch (continente) {
            case 'America':
                if(this.vacuna == 'sinopharm')
                    return 'puede entrar a America'
                else
                    return 'no puede entrar a America'
                break;
            case 'Europa':
                if(this.vacuna == "pfizer")
                    return "puede entrar a Europa"
                else
                    return "no puede entrar a Europa"       
                break;
            default:
                return "No se reconoce el continente"
                break;
        }
    }
    toString(){
        return `Paciente ${this.nombre}\nApellido: ${this.apellido}\nVacuna: ${this.vacuna}\nDocumento: ${this.documento}`
    }
}

for (let i = 1; i <= 4; i++) {
    const nombre = prompt("Ingrese Nombre del Paciente");
    const apellido = prompt("Ingrese Apellido del Paciente");
    const vacuna = prompt("Ingrese Vacuna del Paciente");
    const documento = Number( prompt("Ingrese Documento del Paciente"));
    
    const paciente = new Paciente (nombre, apellido, vacuna, documento);

    console.log(paciente.toString())
    console.log(paciente.nombre + " " + paciente.viajar('America'))
    console.log(paciente.nombre + " " + paciente.viajar('Europa'))
}
