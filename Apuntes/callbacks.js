// Callbacks, Un callback es una función que se pasa a otra función como argumento. 
// Es asíncrono y se ejecuta después de que se complete una tarea en particular. 
// En este caso, se ejecuta después de que se complete la tarea de cifrado.

// Ejemplo 1 de callback
const opt1 = (num1, num2, callback) => {
    return callback(num1, num2);
}
console.log(opt1); // [Function: opt1]





