
const myPromise =new Promise<number>((resuelve,reject)=>{//estructura basica de una promesa
    setTimeout(()=>{//simulamos un proceso asincrono
        //yo quiero mi dinero
        //resuelve(100)
        reject(`Mi amigo se perdio`)//si algo sale mal
    },2000)
})

myPromise.then(//cuando la promesa se resuelve
    (myMoneyIsBack)=>{//recibo el valor resuelto
        console.log(`Tengo mi dinero ${myMoneyIsBack}`)//uso el valor
    }
).catch((reason)=>{//si la promesa es rechazada
    console.warn(reason)//muestro el motivo del rechazo
}).finally(()=>{//siempre se ejecuta al final
    console.log(`Pues a seguir con mi vida`)
})

const pizza = new Promise<string>((resolve) => {
    setTimeout(() => {
        resolve("La pizza llegó 🍕");
        
    }, 2000);
});

pizza
  .then((mensaje) => {
      console.log(mensaje);
  })
  .catch((reason) => {
      console.warn(reason);
  })
  .finally(() => {
      console.log("Proceso terminado 😌");
  });