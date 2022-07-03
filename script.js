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
  document.getElementById("num1").value = '';
}

function valor(value){
  document.getElementById("num1").value += value;
}

function calcular(){
  let valor = document.getElementById("num1").value;
  let resultado = eval(valor);
  document.getElementById('num1').value = resultado;
}

/*function calculadora() { 
  var correr = true; // var de salida
  // para historial de calculos      
  do {
      var entrada = prompt("Calculadora lineal (coloque su operacion / para salir tipee: exit)");
      if (entrada=='exit') {
          correr=false;
          alert('Adios..')
      } else {
          calculo = calculoSinEval(entrada); // evaluacion de expresion 
          salida = entrada + ' = ' + calculo;
          alert('Resultado de : ' + salida);
              // crear nueva li para historico de calculo
              var node = document.createElement("LI");
              var textnode = document.createTextNode(salida);
              node.appendChild(textnode);
              document.getElementById("historico").appendChild(node);
      }
  } while (correr);
};*/
// funcion para obtener la cadena con el boton igual
function obtenerCadena(){
  const entrada = document.getElementById("num1").value;
  calcular1(entrada);
}

// funcion para calcular el resultado
function calcular(entrada) {
        
  // variables
  var valorA=0;
  var valorB=0;
  var calculo =0;
  var operador='';
  var ciclo =true;
  var paso=0;
  var cadena =entrada; // entrada de operacion de calculo
  var expNum = /[\d|.|]+/; // exp para numeros int / flotante
  var expOper = /[-|\|+|-|*|//]/; // exp para operador + - * /

  do {
      paso++;

      // pone ultimo valor calculado para volver a operar 
      if (paso>1) {
          cadena = calculo.toString().concat(cadena);
      } 

      // 1) PARA el primer valor
      valorA= cadena.match(expNum); // tomar numero encontrado por exp de numero
      if (valorA==null) { break;  }
      cadena= cadena.replace(valorA, ""); // quitar numero encontrado
      ciclo = (valorA.length-length==0)? false : true;  // si no se consigue el primer numero se sale

      // 2) PARA el segundo valor
      valorB= cadena.match(expNum); // tomar numero encontrado por exp de numero
      cadena= cadena.replace(valorB, ""); // quitar numero encontrado

      // 3) Para el operador
      operador= cadena.match(expOper); // tomar numero encontrado por exp de numero
      cadena= cadena.replace(operador, ""); // quitar numero encontrado
          // si no se consigue operador se sale del ciclo.
          if (operador==null) {  break; } 
             
      operador=operador.toString(); // convierte operador en string para el switch
      // calculo de operacion artimeticas
      switch (operador) {
          case '+':
              calculo = parseFloat(valorA) + parseFloat(valorB);
          break;
          case '-':
              calculo = parseFloat(valorA) - parseFloat(valorB);
          break;
          case '*':
              calculo = parseFloat(valorA) * parseFloat(valorB);
          break;
          case '/':
              calculo = parseFloat(valorA) / parseFloat(valorB);
          break;
          default:
              calculo=null;
              ciclo = false; // si falla el calculo se sale;
          break;
      }

  // si no hay mas contenido se sale del ciclo
  if (cadena.length<=1) {
      ciclo = false;
  }
      
  } while (ciclo);

   return document.getElementById("num1").value = calculo; // salida de calculo

}  // fin de funcion calculoSinEval()
function calcular(cadena){
  var expRegularNum = /[\d|.|]+/; // expresion regular para numeros int / flotante
  var expReguarOper = /[-|\|+|-|*|//]/; // expresion regular para operadores + - * /
  let num1 = 0;
  let num2 = 0;
  let operador = '';

  num1 = cadena.match(expRegularNum);
  cadena = cadena.replace('');
  operador = cadena.match(expReguarOper);
  cadena = cadena.replace('');
  num2 = cadena.match(expRegularNum);
  cadena = cadena.replace('');
  
  operador = operador.toString();

  switch (operador){
    case '+':
      resultado = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
      resultado = parseFloat(num1) - parseFloat(num2);
      break
    case '*':
      resultado = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      resultado = parseFloat(num1) / parseFloat(num2);
      break;
  }

  return document.getElementById("num1").value = resultado; // salida de calculo



}
/*const getValueInput = () =>{
    let inputValue = document.getElementById("numero1").value + document.getElementById("numero2").innerHTML = inputValue; 
  }*/

