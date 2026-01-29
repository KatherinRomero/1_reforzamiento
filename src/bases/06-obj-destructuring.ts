//destructuracion de objetos

const person ={
    name:'tony',
    age:45,
    key:'iroman'

}

const{name,age,key}=person
console.log(name,age,key)

interface Hero{
    name:string,
    age:number,
    key:string,
    rank?:string,
}

const useContext=(hero:Hero)=>{//destructuracion en parametros
    const{name,age,key,rank} = hero
    return{
       key,
     user:{
        name,
        age
    }, 
    rank 
     
    }
}



const context=useContext(person)
    console.log(context)
    console.log(context.user.age)

