// Async await, es una forma de trabajar con promesas de una forma más sencilla y legible.

// Ejemplo 1 de async await
const opt1 = async () => {
    return 'La operación fue exitosa';
}
console.log(opt1()); // Promise { 'La operación fue exitosa' }

// Ejemplo 2 de async await, mas complejo
const opt2 = async () => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La operación fue exitosa');
        }, 4000);
    });
    const resultado = await promesa;
    return resultado;
}
opt2().then(resultado => console.log(resultado)); // La operación fue exitosa
// En este caso, la función opt2() retorna una promesa, por lo que se puede utilizar el método then() para obtener el resultado de la promesa.
