//Esta primera forma de funtion no se dene realizar
function saludar(nombre){ 
    return `Hola ${nombre}`;
   }
   
   console.log(saludar('Fred'))
   saludar = 20;
   console.log(saludar)
   
   // 4 formas correctar para declarar una función
   
   //1
   const saludar1 = function(nombre){
       return `Hola ${nombre}`;
   }
   console.log(saludar1('Fredy'));
   
   //2
   const saludar2 = (nombre) => {
       return `Hola ${nombre}`;
   }
   console.log(saludar2('Fredy'));
   
   //3
   const saludar3 = (nombre) => `Hola ${nombre}`;
   console.log(saludar3('Fredy'));
   
   //4
   let firstName = 'Fred';
   const saludar4 = () => `Hola ${firstName}`;
   console.log(saludar4());
   
//____2

const getUser = ()=>{
    return {
        UUID: 'ASDHFKJAL2394290',
        nombre: 'Fredy'
    }
}

console.log(getUser())

//simplificando la función

const getUser2 = ()=>({
    UUID: 'ASDHFKJAL2394290',
    nombre: 'Fredy'
});

console.log(getUser2())

//TAREA: SIMPLIFICAR LA FUNCIÓN

function getUsuarioActivo(nombre){
    return {
        UUID: 'ASDHFKJAL2394290',
        nombre: 'Fredy'
    }
};

const usuarioActivo = getUsuarioActivo('Fred');

console.log(usuarioActivo);

//solución

const usuarioActivo2 = (nombre) =>({
    UUID: 'ASDHFKJAL2394290',
    nombre: 'Fredy'
});

console.log(usuarioActivo2('Fred'));


   
   
   
   
   
   
   