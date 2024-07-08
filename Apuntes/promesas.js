// Promesas. Las promesas son objetos que representan la terminación o el fracaso de una operación asíncrona.

// Ejemplo 1 de promesas
const opt1 = new Promise((resolve, reject) => {
    if (true) {
        resolve('La operación fue exitosa');
    } else {
        reject('La operación no fue exitosa');
    }
});
console.log(opt1); // Promise { 'La operación fue exitosa' }

