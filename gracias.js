//Recibimos los datos del index.html
const nombre=document.querySelector('#nombre')
const telefono=document.querySelector('#telefono')
const direccion=document.querySelector('#direccion')
const cantidad=document.querySelector('#cantidad')
const comentarios=document.querySelector('#comentarios')
const boton=document.querySelector('#boton')

const adiciones=document.querySelector('.adiciones')
const queso=document.querySelector('#queso')
const lecherita=document.querySelector('#lecherita')
const carne=document.querySelector('#carne')

//Referencias de gracias.html
const container=document.querySelector('#container')


const pedido={
    nombre:null,
    telefono:null,
    direccion:null,
    cantidad:null,
    adiciones:'',
    comentarios:null,
}
//recibamos el valor de cada input con su evento
nombre.addEventListener('input',(evento)=>{
     pedido.nombre=evento.target.value
})


telefono.addEventListener('input',(evento)=>{
     pedido.telefono=evento.target.value
})
direccion.addEventListener('input',(evento)=>{
     pedido.direccion=evento.target.value
})

//Recibimos el valor del select que tiene la cantidad
cantidad.addEventListener('change',()=>{
     pedido.cantidad=cantidad.value
})



comentarios.addEventListener('input',(evento)=>{
     pedido.comentarios=evento.target.value
     console.log(pedido.comentarios)
})


boton.addEventListener('click',(evento)=>{
    evento.preventDefault()

    //Recuperamos el valor de los checkbox. Lo hacemos con un ciclo de 3 iteraciones porque son 3 posibles adiciones 
    for(let i=0;i<3;i++){
        if(queso.checked){
            pedido.adiciones+=queso.value+ ','+' '
            //Desmarcamos el checkbox
            queso.checked=false
        }
        else if(lecherita.checked){
            pedido.adiciones+=lecherita.value+ ','+' '
            //Desmarcamos el checkbox
            lecherita.checked=false
        }
        else if(carne.checked){
            console.log(carne)
            pedido.adiciones+=carne.value+ ','+' '

            //Desmarcamos el checkbox
            carne.checked=false
        }
    }
    
    

    console.log(pedido)
})
