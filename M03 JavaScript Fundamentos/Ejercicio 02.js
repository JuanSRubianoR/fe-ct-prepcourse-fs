/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   console.log(string)
}
   devolverString("Equis de");

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   return suma(x+y);
}
   suma(31,8);

function resta(x, y) {
   // Retorna el resultado de la resta.
   return resta(x-y);
}

function divide(x, y) {
   // Retorna el resultado de su división.
   return divide(x/y);
}
   divide(15,5);

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   return multiplica(x*y);
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   return obtenerResto(x % y);
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
