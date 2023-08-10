'use strict';
/*
1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, 
suma, resta, multiplicación, división e imprimir las operaciones. 
Validar la división entre 0(cero).
*/ 
const sumar = (num1,num2)=>{
    return num1 + num2;
}

let numero1 = parseFloat(prompt('Dame el primer valor a sumar:'));
let numero2 = parseFloat(prompt('Dame el segundo valor a sumar:'));

let suma = sumar (numero1,numero2);
alert(suma);

const restar = (num3,num4)=>{
    return num3 - num4;
}
let numero3 = parseFloat(prompt('Dame el primer valor a restar:'));
let numero4 = parseFloat(prompt('Dame el segundo valor a restar:'));

let resta = restar (numero3,numero4);
alert(resta);

const multiplicar = (num5,num6)=>{
    return num5 * num6;
}

let numero5 = parseFloat(prompt('Dame el primer valor a multiplicar:'));
let numero6 = parseFloat(prompt('Dame el segundo valor a multiplicar:'));

let multiplicación = multiplicar (numero5,numero6);
alert(multiplicación);

const dividir = (num7,num8)=>{
    const response = (num7>0 && num8 >0)? num7/num8 : "No se puede realizar la division";
    console.log(response);
    return response;
 }
 
let numero7 = parseFloat(prompt('Dame el primer valor a dividir:'));
let numero8 = parseFloat(prompt('Dame el segundo valor a dividir:'));

let division = dividir (numero7,numero8);
alert(division);
 
