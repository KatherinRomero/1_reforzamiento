import type { NasaImg } from "../data/nasa.response"


const API_KEY='S9S1qJXg2IMojIDWpiFnBtjh1yXKR1xPpa5M5ntb'




const imprimirImagen=(url:string)=>{
    const elementoImagen= document.createElement('img')
    elementoImagen.src=url
    document.body.append(elementoImagen)

}

const getImagen =async()=>{
    const myRequers = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    const resultados:NasaImg = await myRequers.json()
    return resultados.url
}

getImagen().then(imprimirImagen)