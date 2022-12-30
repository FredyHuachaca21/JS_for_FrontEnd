import heroes from '../data/heroes'

const getHeroeByID = (id)=>{
    return heroes.find((x)=>{
        if(x.id === id){
            return true;
        }else{
            return false;
        } 
    });
}

console.log(getHeroeByID(4))

//Optimizando la busqueda 1ra forma
const getHeroeByID_01 = (id) =>{
    return heroes.find((heroes) => heroes.id === id);
}
console.log(getHeroeByID_01(3));


//Optimizando la busqueda 2da forma
export const getHeroeByID_02 = (id) => heroes.find(heroes=> heroes.id === id);
console.log(getHeroeByID_02(5));

//busqueda por owner
export const getHeroeByOwner = (owner)=>{
    return heroes.filter(x => x.owner === owner) 
}

console.log(getHeroeByOwner('Marvel'))