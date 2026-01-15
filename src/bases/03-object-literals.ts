
const ironman ={
    firstName:"Tony",
    lastName:"Stark",
    ege:45,
    address:{
        postalCode:"ABC123",
        city:"New York"
    },
};
const spiderman ={...ironman}
//{...objeto} se usa para clonar un objeto solo las propiedades de primer nivel
spiderman.firstName="Peter"
spiderman.lastName="Parker"
spiderman.ege=22

const cap =structuredClone(ironman)
//structuredClone(objeto) se usa para clonar un objeto incluyendo las propiedades anidadas
cap.firstName="steve"
cap.lastName=" rogers"
cap.ege=27
cap.address.city=" Washington D.C."

console.log(ironman, spiderman,cap)

