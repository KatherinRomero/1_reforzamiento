const ironman ={
    firstName:"Tony",
    lastName:"Stark",
    age:45,
    address:{
        postalCode:"ABC123",
        city:"New York"
    },
};
const spiderman ={...ironman}
//{...objeto} se usa para clonar un objeto solo las propiedades de primer nivel
spiderman.firstName="Peter"
spiderman.lastName="Parker"
spiderman.age=22

const cap =structuredClone(ironman)
//structuredClone(objeto) se usa para clonar un objeto incluyendo las propiedades anidadas
cap.firstName="steve"
cap.lastName=" rogers"
cap.age=27
cap.address.city=" Washington D.C."

console.log(ironman, spiderman,cap)

//nterfaces
interface Person{ //la interfas es estructura de un objeto
    firstName:string,
    lastName:string,
    age:number
    adress?:Address//el signo de interrogacion indica que la propiedad es opcional
}

   interface Address {
        postalCode:string,
        city:string,
    }


const hulk:Person={
    firstName: "Bruce",
    lastName: "Banner",
    age: 45
}

console.log(hulk)