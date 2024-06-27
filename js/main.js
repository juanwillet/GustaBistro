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
    precio: 3
}
const ingredienteJamon={
    nombre: 'Jamon',
    precio: 3
}
const ingredientePeperoni={
    nombre: 'Peperoni',
    precio: 3
}
const ingredienteTocino={
    nombre: 'Tocino',
    precio: 3
}
const ingredienteVegetales={
    nombre: 'Vegetariana',
    precio: 3
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
return nuevoTotal
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


const burguerGusta= menuCard[0].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre='Gusta burguer')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const burguerSweetBacon= menuCard[1].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre='Sweet bacon burguer')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const burguerChickenSalad= menuCard[2].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre='Gusta chicken salad')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const burguerMarina= menuCard[3].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre='Gusta marina')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const burguerMushroomGravy= menuCard[4].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre='Mushroom gravy burguer')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const burguerPolloCrispy= menuCard[5].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre='Sandwich de pollo crispy')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pastaAlfredo= menuCard[6].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre='Fetuccini alfredo')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pastaAmatriciana= menuCard[7].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre='Amatriciana')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pastaRaviolisTomate= menuCard[8].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre='Raviolis en salsa de tomate')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pastaPollo= menuCard[9].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre='Pasta de pollo')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pastaPesto= menuCard[10].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre='Pasta en salsa pesto')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pastaRaviolisEspinaca= menuCard[11].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre='Raviolis con espinaca')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pizzaAceitunas= menuCard[12].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre='Aceitunas negras')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pizzaJamon= menuCard[13].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre='Jamon')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pizzaPeperoni= menuCard[14].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre='Peperoni')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pizzaTocino= menuCard[15].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre='Tocino')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pizzaMargarita= menuCard[16].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre='Margarita')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const pizzaVegetariana= menuCard[17].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre='Vegetariana')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const vinoSauvignon= menuCard[18].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre='Sauvignon blanco')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const vinoRose= menuCard[19].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre='Rose')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const vinoMerlot= menuCard[20].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre='Merlot')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const vinoCabernet= menuCard[21].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre='Cabernet sauvignon')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const vinoTinto= menuCard[22].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre='Vino tinto seco')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const vinoBlanco= menuCard[23].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre='Vino blanco seco')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const cervezaSoleraVerde= menuCard[24].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre='Solera verde')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const cervezaSoleraAzul= menuCard[25].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre='Solera azul')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const cervezaCorona= menuCard[26].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre='Corona')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const cervezaZulia= menuCard[27].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre='Balde zulia')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const cervezaPolar= menuCard[28].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre='Balde polar')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const cervezaHeineken= menuCard[29].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre='Heineken')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const coctelMargarita= menuCard[30].addEventListener('click', ()=>{
    const eleccionMenu= cocteles.find(ele=> ele.nombre='Margarita')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const coctelMojito= menuCard[31].addEventListener('click', ()=>{
    const eleccionMenu= cocteles.find(ele=> ele.nombre='Mojito')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
})
const coctelNegroni= menuCard[32].addEventListener('click', ()=>{
    const eleccionMenu= cocteles.find(ele=> ele.nombre='Negroni')
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))

    suma.innerHTML=sumadora(eleccionMenu.precio)
})





