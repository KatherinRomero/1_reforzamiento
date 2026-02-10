import type { NasaImg } from "../data/nasa.response"


const API_KEY='S9S1qJXg2IMojIDWpiFnBtjh1yXKR1xPpa5M5ntb'

const myRequers = fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)


const imprimirImagen=(url:string)=>{
    const elementoImagen= document.createElement('img')
    elementoImagen.src=url
    document.body.append(elementoImagen)

}

myRequers
.then((respuesta)=>respuesta.json())
.then((informacion:NasaImg)=>{
   const imagenUrl=informacion.url
   imprimirImagen(imagenUrl)
}).catch((error)=>{
    console.error(error)
})