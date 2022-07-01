/*let dato = [];
let resultado;
alert("Bienvenido usuari@");
let tope = prompt("¿Cuántos valores desea ingresar?");

dato[0] = prompt(`Elemento ${0} a ingresar:`);
resultado = parseInt(dato[0]);
for (let i = 1; i < tope; i++) {
  let op = prompt("1)Suma  2)Resta  3)Multiplicacion  4)Division  5)Salir");
  op = parseInt(op);
  if (op == 1) {
    dato[i] = prompt(`Elemento ${i} a ingresar:`);
    resultado += parseInt(dato[i]);
  } else if (op == 2) {
    dato[i] = prompt(`Elemento ${i} a ingresar:`);
    resultado -= parseInt(dato[i]);
  } else if (op == 3) {
    dato[i] = prompt(`Elemento ${i} a ingresar:`);
    resultado *= parseInt(dato[i]);
  } else if (op == 4) {
    dato[i] = prompt(`Elemento ${i} a ingresar:`);
    resultado /= parseInt(dato[i]);
  } else if (op == 5) {
    break;
  } else {
    document.write("Ya superaste tú límite de valores.");
  }
}
document.write("El resultado de la operación es: " + resultado);
*/
function suma(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    resultado = parseInt(numero1) + parseInt(numero2);
    //document.writeln(resultado);
    document.getElementById("valueInput").innerHTML = resultado;
}

function resta(){
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  resultado = parseInt(numero1) - parseInt(numero2);
  //document.writeln(resultado);
  document.getElementById("valueInput").innerHTML = resultado;
}

function multiplicacion(){
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  resultado = parseInt(numero1) * parseInt(numero2);
  //document.writeln(resultado);
  document.getElementById("valueInput").innerHTML = resultado;
}

function division(){
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;
  resultado = parseInt(numero1) / parseInt(numero2);
  //document.writeln(resultado);
  document.getElementById("valueInput").innerHTML = resultado;
}

function clearScreen(){
  document.getElementById("result").value = '';
}

function valor(value){
  document.getElementById("result").value += value;
}

function calcular(){
  let valor = document.getElementById("display").value;
  let resultado = eval(valor);
  document.getElementById('display').value = resultado;
}

/*const getValueInput = () =>{
    let inputValue = document.getElementById("numero1").value + document.getElementById("numero2").innerHTML = inputValue; 
  }*/

