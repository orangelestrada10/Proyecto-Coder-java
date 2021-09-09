let inicio = prompt("Ingrese Tipo de vacuna contra COVID-19");

while(inicio != "no" ){
   switch (inicio) {
       case "sputnik":
            alert("Tu Vacuna es la sputnik");
            break;
        case "sinopharm":
            alert("Tu Vacuna es la sinopharm");
            break;
            case "pfizer":
            alert("Tu Vacuna es la pfizer");
            break;
       default:
           alert("No Hay Vacuna")
           break;
   }
   inicio = prompt("Ingresar un nombre");
}
for(let turno = 1; turno <=3; turno++){
    let ingresarTurno = prompt("Ingresar Nombre del paciente " + turno );
    let ingresarVacuna = prompt("Ingresar Vacuna");
    console.log(" Nombre del paciente: "+ ingresarTurno + " Tipo de Vacuna: " + ingresarVacuna);
}


    
