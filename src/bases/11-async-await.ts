import type { GiphyRandomResponse } from "../data/giphy.response"   

const API_KEY='rg9PLRLwMIY1u8TjewxDve3DHp3W643Y'



const createImageInsideDOM=(url:string)=>{
    const imgElement =document.createElement('img')
    imgElement.src =url
    document.body.append(imgElement)
}


const getImgeUrl= async ():Promise<string> =>{// funcion asincrona que devuelve una promesa de tipo string
   const response= await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)
   const {data}: GiphyRandomResponse = await response.json()// desestructuramos la respuesta para obtener la propiedad data que contiene la informacion del gif
   return data.images.original.url// devolvemos la url del gif original
   
}
getImgeUrl().then(createImageInsideDOM)// llamamos a la funcion para crear el gif dentro del DOM con la url obtenida de la funcion getImgeUrl

