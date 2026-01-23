const ironman = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    postalCode: "ABC123",
    city: "New York"
  }
};

const spiderman = { ...ironman };
// { ...objeto } se usa para clonar un objeto (solo propiedades de primer nivel)

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;

const cap = structuredClone(ironman);
// structuredClone(objeto) se usa para clonar un objeto incluyendo propiedades anidadas

cap.firstName = "Steve";
cap.lastName = "Rogers";
cap.age = 27;
cap.address.city = "Washington D.C.";

console.log(ironman, spiderman, cap);

// Interfaces
interface Person { // La interfaz define la estructura de un objeto
  firstName: string;
  lastName: string;
  age: number;
  address?: Address; // El signo ? indica que la propiedad es opcional
}

interface Address {
  postalCode: string;
  city: string;
}

const hulk: Person = {
  firstName: "Bruce",
  lastName: "Banner",
  age: 45
};

console.log(hulk);
