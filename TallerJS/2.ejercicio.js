'use strict';
/*
2. Calcular el sueldo a pagar de un trabajador dado que se debe ingresar la cantidad de horas trabajadas y el valor de la hora en pesos.
*/ 

const calcularSueldo = (horasTrabajadas,valorHora)=>{
    const response = (horasTrabajadas>0 && valorHora >0)? horasTrabajadas*valorHora : "No se puede calcular si es 0";
    console.log(response);
    return response;
 }
 
let horasTrabajadas = parseFloat(prompt('Dame las horas trabajadas:'));
let valorHora = parseFloat(prompt('Dame el valor de las horas en pesos:'));

let calcular = calcularSueldo (numero7,numero8);
alert(calcular);