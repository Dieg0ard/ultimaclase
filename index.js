function calcularBono() {



    const nodoHorasLabor = document.getElementById("horasLabor");
    const horasLabor = nodoHorasLabor.valueAsNumber;

    const nodotiempoLabor = document.getElementById("tiempoLabor");
    const tiempoLabor = nodotiempoLabor.valueAsNumber;

    const nodohijos = document.getElementById("hijos");
    const hijos = nodohijos.valueAsNumber;

    // Bonificaciones

    let horas1 = 20000;
    let horas2 = 50000;
    let horas3 = 100000;

    let años1 = 20000;
    let años2 = 50000;
    let años3 = 100000;

    let hijos1 = 20000;
    let hijos2 = 50000;
    let hijos3 = 100000;

    // HORAS 1

    if (horasLabor <= 50 && tiempoLabor === 1 && hijos > 0 && hijos < 2) {
        console.log(horas1 + años1 + hijos1)
    } else if (horasLabor <= 50 && tiempoLabor === 1 && hijos >= 2 && hijos < 5) {
        console.log(horas1 + años1 + hijos2)
    } else if (horasLabor <= 50 && tiempoLabor === 1 && hijos >= 5) {
        console.log(horas1 + años1 + hijos3)
    } else if (horasLabor <= 50 && tiempoLabor > 1 && tiempoLabor <= 3 && hijos > 0 && hijos <= 2) {
        console.log(horas1 + años2 + hijos1)
    } else if (horasLabor <= 50 && tiempoLabor > 3 && hijos > 0 && hijos < 2) {
        console.log(horas1 + años3 + hijos1)
    } else if (horasLabor <= 50 &&   hijos >= 2 && hijos < 5) {
        console.log(horas1 + años2 + hijos2)
    } else if (horasLabor <= 50 && tiempoLabor > 1 && tiempoLabor <= 3 && hijos >= 5){
        console.log(horas1 + años2 + hijos3)
    } else if (horasLabor <= 50 && tiempoLabor > 3 && hijos >= 2 && hijos < 5){
        console.log(horas1 + años3 + hijos2)
    } else if (horasLabor <= 50 && tiempoLabor > 3 && hijos >= 5){
        console.log(horas1 + años3 + hijos3)
    }

    // HORAS 2

    else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor === 1 && hijos > 0 && hijos < 2) {
        console.log(horas2 + años1 + hijos1)
    } else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor === 1 && hijos >= 2 && hijos < 5) {
        console.log(horas2 + años1 + hijos2)
    } else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor === 1 && hijos >= 5) {
        console.log(horas2 + años1 + hijos3)
    } else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor > 1 && tiempoLabor <= 3 && hijos > 0 && hijos < 2) {
        console.log(horas2 + años2 + hijos1)
    } else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor > 3 && hijos > 0 && hijos < 2) {
        console.log(horas2 + años3 + hijos1)
    } else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor > 1 && tiempoLabor <= 3 && hijos >= 2 && hijos < 5){
        console.log(horas2 + años2 + hijos2)
    } else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor > 1 && tiempoLabor <= 3 && hijos >= 5){
        console.log(horas2 + años2 + hijos3)
    } else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor > 3 && hijos >= 2 && hijos < 5){
        console.log(horas2 + años3 + hijos2)
    } else if (horasLabor > 50 && horasLabor <= 100 && tiempoLabor > 3 && hijos >= 5){
        console.log(horas2 + años3 + hijos3)
    }

    // HORAS 3

     else if (horasLabor > 100 && tiempoLabor === 1 && hijos > 0 && hijos < 2) {
        console.log(horas3 + años1 + hijos1)
    } else if (horasLabor > 100 && tiempoLabor === 1 && hijos >= 2 && hijos < 5) {
        console.log(horas3 + años1 + hijos2)
    } else if (horasLabor > 100 && tiempoLabor === 1 && hijos >= 5) {
        console.log(horas3 + años1 + hijos3)
    } else if (horasLabor > 100 && tiempoLabor > 1 && tiempoLabor <= 3 && hijos > 0 && hijos < 2) {
        console.log(horas3 + años2 + hijos1)
    } else if (horasLabor > 100 && tiempoLabor > 3 && hijos > 0 && hijos < 2) {
        console.log(horas3 + años3 + hijos1)
    } else if (horasLabor > 100 && tiempoLabor > 3 && hijos >= 5) {
        console.log(horas3 + años3 + hijos3)
    } else if (horasLabor > 100 && tiempoLabor > 3 && hijos >= 2 && hijos < 5){
        console.log(horas3 + años3 + hijos2)
    } else if (horasLabor > 100 && tiempoLabor > 1 && tiempoLabor <= 3 && hijos >= 2 && hijos < 5){
        console.log(horas3 + años2 + hijos2)
    } else if (horasLabor > 100 && tiempoLabor > 1 && tiempoLabor <= 3 && hijos >= 5){
        console.log(horas3 + años2 + hijos3)
    }


}


