//---------------------------------------------------------HAMBURGUESAS---------------------------------------------------------
const sandwichPolloCrispy = {
    nombre: 'Sandwich de pollo crispy',
    precio: 15
}
const gustaBurguer={
    nombre: 'Gusta burguer',
    precio: 15
}
const sweetBaconBurguer={
    nombre: 'Sweet bacon burguer',
    precio: 15
}
const gustaChickenSalad={
    nombre: 'Gusta chicken salad',
    precio: 15
}
const gustaMarina={
    nombre: 'Gusta marina',
    precio: 15
}
const mushroomGravyBurguer={
    nombre: 'Mushroom gravy burguer',
    precio: 15
}


//---------------------------------------------------------PASTAS---------------------------------------------------------
const fetucciniAlfredo={
    nombre: 'Fetuccini alfredo',
    precio: 18
}
const amatriciana={
    nombre: 'Amatriciana',
    precio: 18
}
const raviolisSalsaDeTomate={
    nombre: 'Raviolis en salsa de tomate',
    precio: 18
}
const polloPasta={
    nombre: 'Pasta de pollo',
    precio: 18
}
const pestoPasta={
    nombre: 'Pasta en salsa pesto',
    precio: 18
}
const raviolisEspinaca={
    nombre: 'Raviolis con espinaca',
    precio: 18
}


//---------------------------------------------------------PIZZAS---------------------------------------------------------
const margaritaTradicional={
    nombre: 'Margarita',
    precio: 15
}
const ingredienteAceitesNegras={
    nombre: 'Aceitunas negras',
    precio: 17
}
const ingredienteJamon={
    nombre: 'Jamon',
    precio: 19
}
const ingredientePeperoni={
    nombre: 'Peperoni',
    precio: 20
}
const ingredienteTocino={
    nombre: 'Tocino',
    precio: 25
}
const ingredienteVegetales={
    nombre: 'Vegetariana',
    precio: 18
}

//---------------------------------------------------------VINOS---------------------------------------------------------
const sauvignonBlanco={
    nombre: 'Sauvignon blanco',
    precio: 18
}
const rose={
    nombre: 'Rose',
    precio: 18
}
const merlot={
    nombre: 'Merlot',
    precio: 18
}
const cabernetSauvignon={
    nombre: 'Cabernet sauvignon',
    precio: 18
}
const vinoTintoSeco={
    nombre: 'Vino tinto seco',
    precio: 18
}
const vinoTintoBlanco={
    nombre: 'Vino blanco seco',
    precio: 18
}


//---------------------------------------------------------CERVEZAS---------------------------------------------------------
const soleraVerde={
    nombre: 'Solera verde',
    precio: 3,
    cantidad: 1
}
const soleraAzul={
    nombre: 'Solera azul',
    precio: 3,
    cantidad: 1
}
const corona={
    nombre: 'Corona',
    precio: 4,
    cantidad: 1
}
const baldeZulia={
    nombre: 'Balde zulia',
    precio: 18,
    cantidad: 12
}
const baldePolar={
    nombre: 'Balde polar',
    precio: 18,
    cantidad: 12
}
const heineken={
    nombre: 'Heineken',
    precio: 5,
    cantidad: 1
}


//---------------------------------------------------------COCTELES---------------------------------------------------------
const margarita={
    nombre: 'Margarita',
    precio: 10,
    cantidad: 1
}
const mojito={
    nombre: 'Mojito',
    precio: 8,
    cantidad: 1
}
const negroni={
    nombre: 'Negroni',
    precio: 10,
    cantidad: 1 
}

//---------------------------------------------------------MENU---------------------------------------------------------
const cocteles= [margarita, mojito, negroni]
const cervezas= [soleraVerde, soleraAzul, corona, baldeZulia, baldePolar, heineken]
const vinos= [sauvignonBlanco, rose, merlot, cabernetSauvignon, vinoTintoSeco, vinoTintoBlanco]
const pizzas= [margaritaTradicional, ingredienteAceitesNegras, ingredienteJamon, ingredientePeperoni, ingredienteTocino, ingredienteVegetales]
const pastas= [fetucciniAlfredo, amatriciana, raviolisSalsaDeTomate, polloPasta, pestoPasta, raviolisEspinaca]
const hamburguesas =[sandwichPolloCrispy, gustaBurguer, sweetBaconBurguer, gustaChickenSalad, gustaMarina, mushroomGravyBurguer]


//---------------------------------------------------------ORDENES---------------------------------------------------------

let total=0
const sumadora= (entrada)=>{
let nuevoTotal=total+entrada
total=nuevoTotal
return total+"$"
}
const restadora= (entrada)=>{
    let nuevoTotal=total-entrada
    total=nuevoTotal
    return total+"$"
    }
//---------------------------------------------------------EVENTOS BOTONES CARRITO---------------------------------------------------------
const carrito= document.getElementById('carrito')
const abrirCarrito= document.getElementById('abrir-carrito')
const cerrarCarrito= document.getElementById('cerrar-carrito')

abrirCarrito.addEventListener('click', ()=>{
    carrito.classList.toggle('carrito-abierto')
})
cerrarCarrito.addEventListener('click', ()=>{
    carrito.classList.toggle('carrito-abierto')
})
//---------------------------------------------------------EVENTOS PRODUCTOS---------------------------------------------------------
let registroDeOrden=[]
let eleccion

const menuCard= document.getElementsByClassName('menu-card')
const listaPedidos= document.getElementById('lista-pedidos')
const suma= document.getElementById('suma')



const botonDeBorrar =(pedido)=>{
const boton= document.getElementById('borrar')
boton.addEventListener('click', ()=>{
    listaPedidos.removeChild(pedido)
}) 
}

const clasificador=(seccion, comida)=>{
    const eleccionMenu= seccion.find(ele=> ele.nombre.includes(comida))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML= datosEleccion 
    listaPedidos.appendChild(pedido)
    pedido.classList.toggle('gusta')
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    const boton= document.getElementById('borrar')
    boton.addEventListener('click', ()=>{
        listaPedidos.removeChild(pedido)
        JSON.parse(localStorage.getItem('guardado'))
        registroDeOrden.pop(eleccion)
        localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
        suma.innerHTML=restadora(eleccionMenu.precio)
    }) 
    suma.innerHTML=sumadora(eleccionMenu.precio)
}
const burguerGusta= menuCard[0].addEventListener('click', ()=>{
clasificador(hamburguesas, 'Gusta burguer')
})
const burguerSweetBacon= menuCard[1].addEventListener('click', ()=>{
clasificador(hamburguesas,'Sweet bacon burguer')
})
const burguerChickenSalad= menuCard[2].addEventListener('click', ()=>{
clasificador (hamburguesas, 'Gusta chicken salad')
})
const burguerMarina= menuCard[3].addEventListener('click', ()=>{
clasificador(hamburguesas,'Gusta chicken salad')
})
const burguerMushroomGravy= menuCard[4].addEventListener('click', ()=>{
clasificador(hamburguesas, 'Mushroom gravy burguer')
})
const burguerPolloCrispy= menuCard[5].addEventListener('click', ()=>{
clasificador (hamburguesas, 'Sandwich de pollo crispy')
})
const pastaAlfredo= menuCard[6].addEventListener('click', ()=>{
clasificador(pastas, 'Fetuccini alfredo')
})
const pastaAmatriciana= menuCard[7].addEventListener('click', ()=>{
clasificador(pastas,'Amatriciana')
})
const pastaRaviolisTomate= menuCard[8].addEventListener('click', ()=>{
clasificador(pastas, 'Raviolis en salsa de tomate')
})
const pastaPollo= menuCard[9].addEventListener('click', ()=>{
clasificador(pastas, 'Pasta de pollo')
})
const pastaPesto= menuCard[10].addEventListener('click', ()=>{
clasificador(pastas, 'Pasta en salsa pesto')
})
const pastaRaviolisEspinaca= menuCard[11].addEventListener('click', ()=>{
clasificador(pastas, 'Raviolis con espinaca')
})
const pizzaAceitunas= menuCard[12].addEventListener('click', ()=>{
clasificador(pizzas, 'Aceitunas negras')
})
const pizzaJamon= menuCard[13].addEventListener('click', ()=>{
clasificador(pizzas, 'Jamon')
})
const pizzaPeperoni= menuCard[14].addEventListener('click', ()=>{
clasificador(pizzas, 'Peperoni')
})
const pizzaTocino= menuCard[15].addEventListener('click', ()=>{
clasificador(pizzas, 'Tocino')
})
const pizzaMargarita= menuCard[16].addEventListener('click', ()=>{
clasificador(pizzas, 'Margarita')
})
const pizzaVegetariana= menuCard[17].addEventListener('click', ()=>{
clasificador(pizzas, 'Vegetariana')
})
const vinoSauvignon= menuCard[18].addEventListener('click', ()=>{
clasificador(vinos, 'Sauvignon blanco')
})
const vinoRose= menuCard[19].addEventListener('click', ()=>{
clasificador(vinos, 'Rose')
})
const vinoMerlot= menuCard[20].addEventListener('click', ()=>{
clasificador(vinos, 'Merlot')
})
const vinoCabernet= menuCard[21].addEventListener('click', ()=>{
clasificador(vinos, 'Cabernet sauvignon')
})
const vinoTinto= menuCard[22].addEventListener('click', ()=>{
clasificador(vinos, 'Vino tinto seco')
})
const vinoBlanco= menuCard[23].addEventListener('click', ()=>{
clasificador(vinos, 'Vino blanco seco')
})
const cervezaSoleraVerde= menuCard[24].addEventListener('click', ()=>{
clasificador(cervezas, 'Solera verde')
})
const cervezaSoleraAzul= menuCard[25].addEventListener('click', ()=>{
clasificador(cervezas, 'Solera azul')
})
const cervezaCorona= menuCard[26].addEventListener('click', ()=>{
clasificador(cervezas, 'Corona')
})
const cervezaZulia= menuCard[27].addEventListener('click', ()=>{
clasificador(cervezas, 'Balde zulia')
})
const cervezaPolar= menuCard[28].addEventListener('click', ()=>{
clasificador(cervezas, 'Balde polar')
})
const cervezaHeineken= menuCard[29].addEventListener('click', ()=>{
clasificador(cervezas, 'Heineken')
})
const coctelMargarita= menuCard[30].addEventListener('click', ()=>{
clasificador(cocteles, 'Margarita')
})
const coctelMojito= menuCard[31].addEventListener('click', ()=>{
clasificador(cocteles, 'Mojito')
})
const coctelNegroni= menuCard[32].addEventListener('click', ()=>{
clasificador(cocteles, 'Negroni')
})
//---------------------------------------------------------REGISTRO DE COMPRA---------------------------------------------------------
const recuperacionDeOrden=()=>{
    let ordenRecuperada= JSON.parse(localStorage.getItem('guardado'))
    let listaOrdenRecuperada=ordenRecuperada.forEach(producto=>{
    registroDeOrden.push(producto)
    let datosEleccion= producto.nombre+" "+producto.precio+"$"
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    pedido.classList.toggle('gusta')
    suma.innerHTML=sumadora(producto.precio)
   }) 
   return listaOrdenRecuperada
}
recuperacionDeOrden()


