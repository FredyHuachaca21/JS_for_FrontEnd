//asignación desestructurante

const persona = {
    nombre: "Fredy",
    edad: 40,
    clave: 'Fred',
    direccion:{
        lat: 13543253158,
        long: -24654313,
    },
    //rango: 'Dev'
};

const {nombre, edad, clave} = persona;

console.log(nombre, edad, clave);

const {direccion:{lat, long}} = persona;
console.log(lat, long)

//desestructuración en el argumento

const retornaPersona = ({nombre, edad, clave, direccion:{lat, long}, rango = 'Dev'}) =>{
    console.log(nombre, edad, clave, lat, long, rango)
}

retornaPersona(persona)


//===================
const useContext = ({nombre, edad, clave, direccion:{lat, long}, rango = 'Dev'}) =>{
    return {
        primerNombre: nombre,
        anios: edad,
        password: clave
    }  
}

const {primerNombre, anios, password} = useContext(persona);

console.log(primerNombre, anios, password)

