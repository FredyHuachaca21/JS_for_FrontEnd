import { getHeroeByID_02 } from "./bases/08-import-export";

const promesa = new Promise((resolve, reject)=>{

    setTimeout(()=>{
       const hero = getHeroeByID_02(1);
       resolve(hero);
       reject('No se pudo encontrar el Heroe');
    }, 2000);

});

promesa.then((heroe)=>{
    console.log('Heroe: ', heroe )
}).catch((err) => console.error(err));