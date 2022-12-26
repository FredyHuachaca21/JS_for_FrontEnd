const personajes = ['Goku', 'Vegueta', 'Majin Buu', 'Cell', 'Bulma', 'Freezer'];

const [goku, vegueta] = personajes;
console.log(goku, vegueta)

//llamar a majinbuu
const [, , majinbuu] = personajes;
console.log( majinbuu);

//en funcion
// const retornaArreglo = ()=>(['ABCDE', 2834236480])
const retornaArreglo = ()=> {
    return ['ABCDE', 2834236480];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
// 1. el primer valor se debe llamar nombre y el segundo setNombre
const useState = (valor)=>{
    return [valor, ()=>{console.log(`Hola ${valor}`)}]
}

const [nombre, setNombre] = useState('Fredy');

console.log(nombre)
setNombre()


