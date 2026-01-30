import './style.css';
//import'./bases/01-const-let';
//import'./bases/02-tamplets-strin';
//import'./bases/03-object-literals';
//import'./bases/04-arreglos';
//import'./bases/05-fuctions';
//import'./bases/06-obj-destructuring';
//import'./bases/0.7-arrey-destructuring';
import'./bases/08-imp-exp'
import { getHeroByOwener } from './bases/08-imp-exp';
import { Owner } from './data/heroes.data';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hola mundo</h1>
  </div>
`
console.log(getHeroByOwener(Owner.Marvel))

