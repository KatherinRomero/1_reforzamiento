
const characterNames = ['Goku', 'Vegeta', 'Trunks'];
const[p1,p2,p3]=characterNames// destructuring
console.log([p1,p2,p3])


const characterpowers = [150, 130, 90];
const [, ,po3] =characterpowers//solo el elemrnto numero 3
console.log(po3)

const returnsArrayFn = ()=>{
    return['ABC',123] as const //as const para que no se pierda el tipo de dato
}

const [letters,numbers]=returnsArrayFn()
console.log(letters +100)
console.log(numbers+100)

const useState=(value:string)=>{
    return[value,(newValue: string) =>{
        console.log(newValue)
    }]as const
}

const [name,setName]=useState('goku')
console.log(name)
setName('vegeta')
