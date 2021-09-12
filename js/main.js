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
   inicio = prompt("Ingrese Tipo de vacuna contra COVID-19");
}
for(let turno = 1; turno <=3; turno++){
    let paciente = prompt("Ingresar Nombre del paciente " );
    while(paciente == ""){
        paciente = prompt("No se ingreso paciente, ingrese uno")
    }
    let ingresarVacuna = prompt("Ingresar Vacuna");
    while(ingresarVacuna == ""){
        ingresarVacuna = prompt("No se ingreso una vacuna, Porfavor Ingresar una nuevamente!");
    }
    console.log(" Nombre del paciente: "+  paciente + " Tipo de Vacuna: " + ingresarVacuna);
}


    
