// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  if (array.length === 0){
    return array;
  } else {
    var sol = new Array();
    var i = 0;
    do {
    sol.push(array[i]+ 1);
      i = i+1;
    } while (i < array.length);
    return sol;
  }
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var str = palabras[0];
  for (var i = 1; i < palabras.length; i++){
    str = str + " " + palabras[i];
  }
  return str;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var i = 0;
  var cot = false;
  do {
    if (array[i] === elemento){
      cot =  true;
      break;
    } else {
      i = i+1;
    }
  } while (i < array.length);
  return cot
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var i = 1;
  var tot = numeros[0];
  if (numeros.length == 1){
    return tot;
  } else {
    do{
      tot = tot + numeros[i];
      i = i + 1;
    } while (i < numeros.length);
    return tot;
  }
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var i = 1;
  var prom = resultadosTest [0];
  do{
    prom = prom + resultadosTest [i];
    i = i + 1;
  } while (i < resultadosTest.length);
  prom = prom / resultadosTest.length
  return prom;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var i = 1;
  var comp = numeros[0];
  do{
    if (numeros[i] > comp){
      comp = numeros[i];
    }
    i = i + 1;
  } while (i < numeros.length);
  return comp;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length == 0){
    return 0;
  } else if (arguments.length == 1){
    return arguments[0];
  } else {
    var i = 1;
    var pdto = arguments[0];
    do{
      pdto = arguments[i] * pdto;
      i = i + 1;
    } while (i < arguments.length);
    return pdto;
  }
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var i = 0;
  var cta = 0;
  do{
    if (arreglo[i] > 18){
      cta = cta + 1;
    }
    i = i + 1;
  } while (i < arreglo.length);
  return cta;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia == 1 || numeroDeDia == 7){
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }    
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var srt = ""+ n +"";
  var frst = srt[0]
  if (frst == 9){
    return true;
  } else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var i = 1;
  var edo = true;
  do{
    if (arreglo[i] !== arreglo[i-1]){
      edo = false;
      break;
      }
      i = i + 1;
    } while (i < arreglo.length);
  return edo;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nvo = new Array();
  var ctr = new Array([false, false, false])
  for (var i = 0; i < array.length; i++){
    switch (array[i]) {
      case "Enero":
        nvo.push(array[i]);
        ctr[0]=true;
        break;
      case "Marzo":
        nvo.push(array[i]);
        ctr[1]=true;
        break;
      case "Noviembre":
        nvo.push(array[i]);
        ctr[2]=true;
        break;
    }
  }
  if (ctr[0] == true & ctr[1] == true & ctr[2] == true){
    return nvo;
  } else {
    return "No se encontraron los meses pedidos";
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nvo = new Array();
  var i = 0;
  do{
    if (array[i] >100){
      nvo.push(array[i]);
      i = i + 1;
    } else {
      i = i + 1;
    }
  } while (i < array.length);
  return nvo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var val = numero;
  var array = new Array();
  for (var i = 1; i < 11; i++){
    val = val + 2;
    if (val === i){
      return "Se interrumpió la ejecución"
      break;
    } else {
      array.push(val);
    }
  }
  return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var val = numero;
  var array = new Array();
  for (var i = 1; i < 11; i++){
    if (i === 5){
      continue;
    } else {
      val = val + 2;
      array.push(val);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
