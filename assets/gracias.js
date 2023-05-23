//Referencias HTML
const containerPedido=document.querySelector('#pedido')
const detallePedido=document.querySelector('#detallePedido')
const imprimir=document.querySelector('#imprimir')
const volver=document.querySelector('#volver')


//Funcion para obtener el pedido de la localStorage
const obtenerLocalStorage=()=>{

    if(localStorage.getItem("pedido")!==null){
        let pedido=JSON.parse(localStorage.getItem("pedido"))
        return pedido
    }
    
}

//Función para imprimir el pedido

const imprimirPedido=()=>{
    window.print()
}

//Obtenemos la info
const pedido=obtenerLocalStorage()

//Calculamos el total a pagar
const precio=5000
pedido.total=`$ ${parseInt(pedido.cantidad)*precio}`

//Mostramos en pantalla al objeto 
console.log(pedido)

//Mostramos en pantalla el pedido
Object.keys(pedido).forEach(clave=>{

    //En caso de que el cliente no haya llenado algun item no obligatorio
    if(pedido[clave]!==null && pedido[clave]!==''){
        detallePedido.innerHTML+=`<li ><strong>${clave.toUpperCase()}</strong> : ${pedido[clave]}</li>`
        // console.log(clave,pedido[clave])
    }
    else{
        detallePedido.innerHTML+=`<li><strong>${clave.toUpperCase()}</strong> : Ninguno</li>`
        // console.log(clave,'Nada')
    }
    
})


//Agreguemos la función imprimir al boton
imprimir.addEventListener('click',()=>{
    imprimirPedido()
})


