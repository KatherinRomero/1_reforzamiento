import { heroes, type Hero, Owner} from "../data/heroes.data"


/*const getHeroById =(id:number):Hero|undefined =>{
    const hero= heroes.find((hero)=>{
        return hero.id=== id
    })
   if (!hero){
        throw new Error(`No existe el id ${id}`)
    
   return hero
   } 
   
console.log(getHeroById(2))
*/
 

    export const getHeroByOwener =(owner:Owner) =>{
    const heroesByOwners= heroes.filter((hero)=>{
        return hero.owner === owner
    })
   return heroesByOwners
}
   