import type { GiphyRandomResponse } from "../data/giphy.response"   //importamos la interface para tipar la respuesta de la api

const API_KEY='rg9PLRLwMIY1u8TjewxDve3DHp3W643Y'// clave de la api 

const myRequesr= fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`)// hacemos la peticion a la api para obtener un gif aleatorio

const createImageInsideDOM=(url:string)=>{// funcion para crear poner el gif dentro del DOM
    const imgElement =document.createElement('img')// creamos un elemento de imagen
    imgElement.src =url// le asignamos la url del gif a la propiedad src del elemento de imagen
    document.body.append(imgElement)// agregamos el elemento de imagen al cuerpo del documento
}

myRequesr// hacemos la peticion a la api para obtener un gif aleatorio
.then((responde)=>responde.json())// convertimos la respuesta a formato json
.then(({data}:GiphyRandomResponse )=>{// desestructuramos la respuesta para obtener la propiedad data que contiene la informacion del gif
    const imagesUrl= data.images.original.url// obtenemos la url del gif original
    createImageInsideDOM(imagesUrl)// llamamos a la funcion para crear el gif dentro del DOM
}).catch((err)=>{// manejamos el error en caso de que la peticion falle
    console.error(err)// mostramos el error en la consola   
})