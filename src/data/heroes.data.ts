interface Hero{
    id:number
    name:string
    owner:Owner
}

type Owner= 'DC'|'Marvel'
 /*enum Owner{
    DC='DC'
    Marvel='Marve'
}
*/
const heroes :Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC',
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel',
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC',
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC',
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel',
  },
  {
    id: 6,
    name: 'Hulk',
    owner: 'Marvel',
  },
];



interface usuario{
    roles:Rol
}
 enum Rol {
    Administrador='administrador',
    usuario='usuario'
 }
 
 const usuario1 :usuario ={
    roles:Rol.Administrador
 }

 