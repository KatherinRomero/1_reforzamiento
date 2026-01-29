function greet(name: string): string {//(nombre del parámetro: tipo de dato) : tipo de dato que retorna
  return `Hola ${name}`;
}

const saludo = (name: string): string => {// const  nombre = (parámetros)=> {cuerpo de la función}
  return `Hola ${name}`;
};

const shortGreet = (name: string): string => `Hola ${name}`;//funcion de una sola línea solo retorna el valor

const message1 = greet("Goku");
const message2 = saludo("Vegeta");
const message3 = shortGreet("Perry");

console.log(message1, message2, message3);

const obtenerUsuario = () => {
  return {
    id: "1110",
    username: "kathecita"
  };
};

const getUser = () => ({
  id: "1110",
  username: "kathecita"
});

const person1 = obtenerUsuario();
const person2 = getUser();

console.log(person1, person2);

const myArray: number[] = [1, 2, 3, 4];

myArray.forEach((value) => {
  console.log(value);
});
