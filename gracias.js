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
    adiciones:null,
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
cantidad.addEventListener('input',(evento)=>{
     pedido.cantidad=evento.target.value
})


adiciones.addEventListener('change',(evento)=>{

    if(queso.checked){
        console.log(queso)
    }
    else if(lecherita.checked){
        console.log(lecherita)
    }
})
comentarios.addEventListener('input',(evento)=>{
     pedido.comentarios=evento.target.value
     console.log(pedido.comentarios)
})


boton.addEventListener('click',(evento)=>{
    evento.preventDefault()
    
    

    console.log(pedido)
})
