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


const burguerGusta= menuCard[0].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre.includes('Gusta burguer'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const burguerSweetBacon= menuCard[1].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre.includes('Sweet bacon burguer'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const burguerChickenSalad= menuCard[2].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre.includes('Gusta chicken salad'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const burguerMarina= menuCard[3].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre.includes('Gusta marina'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const burguerMushroomGravy= menuCard[4].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre.includes('Mushroom gravy burguer'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const burguerPolloCrispy= menuCard[5].addEventListener('click', ()=>{
    const eleccionMenu= hamburguesas.find(ele=> ele.nombre.includes('Sandwich de pollo crispy'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pastaAlfredo= menuCard[6].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre.includes('Fetuccini alfredo'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pastaAmatriciana= menuCard[7].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre.includes('Amatriciana'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pastaRaviolisTomate= menuCard[8].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre.includes('Raviolis en salsa de tomate'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pastaPollo= menuCard[9].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre.includes('Pasta de pollo'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pastaPesto= menuCard[10].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre.includes('Pasta en salsa pesto'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pastaRaviolisEspinaca= menuCard[11].addEventListener('click', ()=>{
    const eleccionMenu= pastas.find(ele=> ele.nombre.includes('Raviolis con espinaca'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pizzaAceitunas= menuCard[12].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre.includes('Aceitunas negras'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pizzaJamon= menuCard[13].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre.includes('Jamon'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pizzaPeperoni= menuCard[14].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre.includes('Peperoni'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pizzaTocino= menuCard[15].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre.includes('Tocino'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pizzaMargarita= menuCard[16].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre.includes('Margarita'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const pizzaVegetariana= menuCard[17].addEventListener('click', ()=>{
    const eleccionMenu= pizzas.find(ele=> ele.nombre.includes('Vegetariana'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const vinoSauvignon= menuCard[18].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre.includes('Sauvignon blanco'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const vinoRose= menuCard[19].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre.includes('Rose'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const vinoMerlot= menuCard[20].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre.includes('Merlot'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const vinoCabernet= menuCard[21].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre.includes('Cabernet sauvignon'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const vinoTinto= menuCard[22].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre.includes('Vino tinto seco'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const vinoBlanco= menuCard[23].addEventListener('click', ()=>{
    const eleccionMenu= vinos.find(ele=> ele.nombre.includes('Vino blanco seco'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const cervezaSoleraVerde= menuCard[24].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre.includes('Solera verde'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const cervezaSoleraAzul= menuCard[25].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre.includes('Solera azul'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const cervezaCorona= menuCard[26].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre.includes('Corona'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const cervezaZulia= menuCard[27].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre.includes('Balde zulia'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const cervezaPolar= menuCard[28].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre.includes('Balde polar'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const cervezaHeineken= menuCard[29].addEventListener('click', ()=>{
    const eleccionMenu= cervezas.find(ele=> ele.nombre.includes('Heineken'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const coctelMargarita= menuCard[30].addEventListener('click', ()=>{
    const eleccionMenu= cocteles.find(ele=> ele.nombre.includes('Margarita'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const coctelMojito= menuCard[31].addEventListener('click', ()=>{
    const eleccionMenu= cocteles.find(ele=> ele.nombre.includes('Mojito'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})
const coctelNegroni= menuCard[32].addEventListener('click', ()=>{
    const eleccionMenu= cocteles.find(ele=> ele.nombre.includes('Negroni'))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    suma.innerHTML=sumadora(eleccionMenu.precio)
})

const recuperacionDeOrden=()=>{
    let ordenRecuperada= JSON.parse(localStorage.getItem('guardado'))
    let listaOrdenRecuperada=ordenRecuperada.forEach(producto=>{
    registroDeOrden.push(producto)
    let datosEleccion= producto.nombre+" "+producto.precio+"$"
    const pedido= document.createElement('li')
    pedido.innerHTML=  datosEleccion
    listaPedidos.appendChild(pedido)
    suma.innerHTML=sumadora(producto.precio)
   }) 
   return listaOrdenRecuperada
}
recuperacionDeOrden()