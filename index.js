alert ("esto es un mini proyecto experimental de una calculadora del estudiante de Javasript :Jose Angel Coronado ")
let nombre = prompt("ingrese su nombre")
let operacion = prompt(nombre +" "+ "escoja entre 4 operaciones matematicos, suma, resta, division y multiplicacion." +" Que operacion matematica deseas realizar?");
if (operacion === "multiplicacion"){
    let numero = parseInt(prompt("ingrese un numero para multiplicar"));
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i;
        alert(`${numero} x ${i} = ${resultado}`);
    }
}else if (operacion === "division"){
    let numero = parseInt(prompt("ingrese un numero para divicion"));
    for(let i = 1; i <= 10; i++){
        let resultado = numero / i;
        alert(`${numero} / ${i} = ${resultado}`);
    }
}else if (operacion === "suma"){
    let numero = parseInt(prompt("ingrese un numero para sumar"));
    for(let i = 1; i <= 10; i++){
        let resultado = numero + i;
        alert(`${numero} + ${i} = ${resultado}`);
    }
}else if (operacion === "resta"){
    let numero = parseInt(prompt("ingrese un numero para restar"));
    for(let i = 1; i <= 10; i++){
        let resultado = numero - i;
        alert(`${numero} - ${i} = ${resultado}`);
    }
}else{
    alert("NO ESCOGIO OPERACION!!!!")
}
