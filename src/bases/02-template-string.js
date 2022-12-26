const nombre = "Fredy";
const apellido = "Huachaca";

// const nomb|reCompleto = nombre + " " + apellido;
const nombreCompleto = `${nombre} ${apellido} edad = ${10 + 20}`;

console.log(nombreCompleto);

function getNombre(){
    return nombreCompleto;
}

console.log(`Mi nombre completo más mi edad es: ${ getNombre()}`)