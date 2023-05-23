//Recibimos los datos del index.html
const nombre=document.querySelector('#nombre')
const telefono=document.querySelector('#telefono')
const direccion=document.querySelector('#direccion')
const cantidad=document.querySelector('#cantidad')
const comentarios=document.querySelector('#comentarios')
const boton=document.querySelector('#boton')
const alerta=document.querySelector('#alerta')
const formulario=document.querySelector('#formulario')

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

    //Si el cliente elige la opcipon de 5 o mas arepas
    if(cantidad.value=='5'){
        const nuevaCantidad=prompt('¿Cuantas arepas desea ordenar?')
        pedido.cantidad=nuevaCantidad
    }
    else if(pedido.cantidad!=='0'){
        alerta.innerHTML=''
    }

    
})



comentarios.addEventListener('input',(evento)=>{
     pedido.comentarios=evento.target.value
     
})


boton.addEventListener('click',(evento)=>{
    evento.preventDefault()

    //Recuperamos el valor de los checkbox. Lo hacemos con un ciclo de 3 iteraciones porque son 3 posibles adiciones 
    //checked verifica que fue seleccionado
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

            pedido.adiciones+=carne.value+ ','+' '

            //Desmarcamos el checkbox
            carne.checked=false
        }
    }

    //Si dejaron la cantidad en 0 sin darle click, devuelve null. Digamos entonces que por defecto sea 0
    pedido.cantidad= pedido.cantidad==null ? pedido.cantidad='0' : pedido.cantidad 
    
    //Si la cantidad es 0, lance la alerta
    if(pedido.cantidad=='0'){
        alerta.style.color="red"
        alerta.innerHTML='<h2><strong>Seleccione 1 o más arepas  para tomar su pedido</strong></h2>'
    }
    
    //Si los campos estan llenos
    else if(pedido.nombre!==null && pedido.nombre!=='' && pedido.telefono!==null && pedido.telefono!=='' && pedido.direccion!==null &&pedido.direccion!=='' ){

        //Calculamos el total a pagar
        const precio=5000
        pedido.total=`$ ${parseInt(pedido.cantidad)*precio}`

        const confirmarOrden=confirm(`Por favor confirme su orden : \n${mostrarOrden(pedido)}`)

        //Si confirma la orden
        if(confirmarOrden){
            //Imprime el objeto Pedido siempre y cuando haya información del mismo
            console.log(pedido)

            //Guarda el pedido en el local Storage
             guardarLocalStorage(pedido)

             //Borramos los campos del formulario
            formulario.reset()

            //Redirigimos
            window.location.href = 'gracias.html';
        }
    }

    //Si esos campos estan vacios, lanzar la alerta
    else if(pedido.nombre==null || pedido.nombre=='' || pedido.telefono==null ||  pedido.telefono=='' || pedido.direccion==null || pedido.direccion==''){
        
        alerta.style.color="red"
        alerta.innerHTML='<h2><strong>Los campos con * son obligatorios </strong></h2>'
    }
})

const guardarLocalStorage=(objeto)=>{
    localStorage.setItem("pedido",JSON.stringify(objeto))
}


//Función para mostrarOrden
const mostrarOrden=(pedido)=>{
    let mensaje=''
    Object.keys(pedido).forEach(clave=>{
        //En caso de que el cliente no haya llenado algun item no obligatorio
        if(pedido[clave]!==null && pedido[clave]!==''){
            mensaje+=`${clave.toUpperCase()} : ${pedido[clave]} \n`
            
            
        }
        else{
            mensaje+=`${clave.toUpperCase()} : Ninguno \n`
            
            
        }
        
    })
    return mensaje
}


