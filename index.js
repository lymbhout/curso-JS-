// alert ("esto es un mini proyecto experimental de una calculadora del estudiante de Javasript :Jose Angel Coronado ")
// let nombre = prompt("ingrese su nombre")
// let operacion = prompt(nombre +" "+ "escoja entre 4 operaciones matematicos, suma, resta, division y multiplicacion." +" Que operacion matematica deseas realizar?");
// if (operacion === "multiplicacion"){
//     let numero = parseInt(prompt("ingrese un numero para multiplicar"));
//     for(let i = 1; i <= 10; i++){
//         let resultado = numero * i;
//         alert(`${numero} x ${i} = ${resultado}`);
//     }
// }else if (operacion === "division"){
//     let numero = parseInt(prompt("ingrese un numero para divicion"));
//     for(let i = 1; i <= 10; i++){
//         let resultado = numero / i;
//         alert(`${numero} / ${i} = ${resultado}`);
//     }
// }else if (operacion === "suma"){
//     let numero = parseInt(prompt("ingrese un numero para sumar"));
//     for(let i = 1; i <= 10; i++){
//         let resultado = numero + i;
//         alert(`${numero} + ${i} = ${resultado}`);
//     }
// }else if (operacion === "resta"){
//     let numero = parseInt(prompt("ingrese un numero para restar"));
//     for(let i = 1; i <= 10; i++){
//         let resultado = numero - i;
//         alert(`${numero} - ${i} = ${resultado}`);
//     }
// }else{
//     alert("NO ESCOGIO OPERACION!!!!")
// }
    // ----------------------------------------------------- desafio complementario
// const suma = (a,b) => a + b 
// const resta = (a,b) => a - b 
// const iva = x =>  x * 0.21
// let precioProducto = 500
// let  descuento = 50

// let nuevoPrecio = resta (suma(precioProducto,iva(precioProducto)),descuento)
// console.log(nuevoPrecio)



// let contador = 0;
// let contadorP = 0;
// let gastoTotal = 0
// let resultado;
// let r = 0;

// let neumatico =(contador,r) => contador * r;


// ------------------------------------------------------ desafio 1
// let neumatico1 = 15;
// let neumatico2 = 20;
// let neumatico3 = 9;
// let uno;
// let dos;
// let tres;

// alert ("Usted actuamente esta en la seccion de neumaticos, y tiene para escojer entre 3 tipos de productos con su repectivo precio, la cual debera escojer uno de las tres opciones,para luego decidir la cantidad que decea comprar y al final saldra su compra total ");
// let pront = Number(prompt(`Neumatico (1): ${neumatico1} $.
// Neumatico (2): ${neumatico2} $.
// Neumatico (3): ${neumatico3} $.`))


// function algoritmo(){
//     if (pront === 1){
//         uno = Number(prompt(`Neumatico(1) ${neumatico1}$. Cuantos desea?`))
//         alert( uno);
//          dos = uno * neumatico1
//         tres = neumatico1

//         return dos
//     }else if (pront === 2){
//         uno =  Number(prompt(`Neumatico(2) ${neumatico2}$. Cuantos desea?`))
//         alert(uno)
//          dos = uno * neumatico2
//         tres = neumatico2
//         return dos
//     }else if (pront === 3){
//         uno =  Number(prompt(`Neumatico(3) ${neumatico3}$. Cuantos desea?`))
//         alert (uno)
//           dos = uno * neumatico3
//         tres = neumatico3
//         return dos
//     }else{
//         alert("No es un numero valido, debe colocar 1, 2 o 3")
//     }
    
// }
// algoritmo();

// alert(`gracias por su compra
// actualmente lleva
// ${uno} compras de ${tres}$
// total: ${uno * tres}$.`);




// ------------------------------------desafio complementario 2

let persona;
const personas = [];
let p;

const acumularP = () =>{
    for (let i = 0; i <= 4; i++){
        persona = prompt("ingrese su nombre")
        personas.push(persona) 
    }
    for( let j = 0; j < personas.length; j ++){
        p = personas[j]
    }
    return p
}
acumularP();
// console.log(personas)
console.log(p)