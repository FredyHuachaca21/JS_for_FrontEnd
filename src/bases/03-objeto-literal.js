const Persona = {
    nombre: "Fredy",
    apellido: "Huachaca",
    edad: 40,
    direccion: {
        calle: "Lima",
        numero: 455,
        vive: true
    }
}
// console.table({Persona})
// console.log({Persona})
console.log(Persona)

const Persona2 = Persona;

Persona2.nombre = "Edgar";

console.log(Persona2)

console.log(Persona.nombre)
console.log(Persona)

//Formar correcta de crear un objeto a apartir de un objeto.

const Persona3 =  {...Persona}

Persona3.nombre = "Frank";

console.log(Persona3)