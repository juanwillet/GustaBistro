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
const notificacion= document.getElementById("notificacion")

abrirCarrito.addEventListener('click', ()=>{
    carrito.classList.toggle('carrito-abierto')
})
cerrarCarrito.addEventListener('click', ()=>{
    carrito.classList.toggle('carrito-abierto')
})

let registroDeOrden=[]
let eleccion

const menuCard= document.getElementsByClassName('menu-card')
const listaPedidos= document.getElementById('lista-pedidos')
const suma= document.getElementById('suma')


const borrador= (item, registro)=>{
    const boton= document.getElementById('borrar')
    boton.addEventListener('click', ()=>{
        listaPedidos.removeChild(item)
        JSON.parse(localStorage.getItem('guardado'))
        registroDeOrden.pop(registro)
        localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
        suma.innerHTML=restadora(registro.precio)
        notificacion.innerText=registroDeOrden.length
    }) 
}
//---------------------------------------------------------SIMULADOR API EN MENU----------------------------------------------------
const divTitulo= document.getElementsByClassName("card-text")

const armadorMenu= (array, comida, numero)=>{
    const objeto= array.find(ele=> ele.titulo.includes(comida))
    let img= document.createElement("img")
    img.src= objeto.imagen
    menuCard[numero].appendChild(img)
    divTitulo[parseInt(numero)].innerHTML+=`<p>${objeto.titulo}</p>`
}
const recopiladorData= async (url, comida, numero)=>{
const resp= await fetch(url)
const data= await resp.json()
armadorMenu(data, comida, numero)
}

recopiladorData("./data.json","Gustaburguer","0")
recopiladorData("./data.json","Sweet Bacon Burguer","1")
recopiladorData("./data.json","Gusta Chicken Salad","2")
recopiladorData("./data.json","Gusta Marina","3")
recopiladorData("./data.json","Mushroom Gravy Burguer","4")
recopiladorData("./data.json","Sandwich de Pollo Crispy","5")
recopiladorData("./data.json","Fetuccini Alfredo","6")
recopiladorData("./data.json","Amatriciana","7")
recopiladorData("./data.json","Raviolis en Salsa de Tomate","8")
recopiladorData("./data.json","Pasta de Pollo","9")
recopiladorData("./data.json","Pasta en Salsa Pesto","10")
recopiladorData("./data.json","Raviolis con Espinaca","11")
recopiladorData("./data.json","Aceitunas Negras","12")
recopiladorData("./data.json","Jamon","13")
recopiladorData("./data.json","Peperoni","14")
recopiladorData("./data.json","Tocino","15")
recopiladorData("./data.json","Tradicional","16")
recopiladorData("./data.json","Vegetariana","17")
recopiladorData("./data.json","Sauvignon Blanco","18")
recopiladorData("./data.json","Rose","19")
recopiladorData("./data.json","Merlot","20")
recopiladorData("./data.json","Cabernet Sauvignon","21")
recopiladorData("./data.json","Vino Tinto Seco","22")
recopiladorData("./data.json","Vino Blanco Seco","23")
recopiladorData("./data.json","Solera Verde","24")
recopiladorData("./data.json","Solera Azul","25")
recopiladorData("./data.json","Corona","26")
recopiladorData("./data.json","Balde Zulia","27")
recopiladorData("./data.json","Balde Polar","28")
recopiladorData("./data.json","Heineken","29")
recopiladorData("./data.json","Margarita","30")
recopiladorData("./data.json","Mojito","31")
recopiladorData("./data.json","Negroni","32")




//---------------------------------------------------------EVENTOS MENUS---------------------------------------------------------
const botonHamburguesas= document.getElementById('botonHamburguesas')
const botonPastas= document.getElementById("botonPastas")
const botonPizzas= document.getElementById("botonPizzas")
const botonVinos= document.getElementById("botonVinos")
const botonCervezas= document.getElementById("botonCervezas")
const botonCocteles= document.getElementById("botonCocteles")

const menuHamburguesas= document.getElementById("hamburguesas")
const menuPastas= document.getElementById("pastas")
const menuPizzas= document.getElementById("pizzas")
const menuVinos= document.getElementById("vinos")
const menuCervezas= document.getElementById("cervezas")
const menuCocteles= document.getElementById("cocteles")

botonHamburguesas.addEventListener('click', ()=>{
    menuHamburguesas.classList.toggle('hamburguesas-dos')
    menuHamburguesas.classList.toggle('hamburguesas')
})
botonPastas.addEventListener('click', ()=>{
    menuPastas.classList.toggle('pastas-dos')
    menuPastas.classList.toggle('pastas')
})
botonPizzas.addEventListener('click', ()=>{
    menuPizzas.classList.toggle('pizzas-dos')
    menuPizzas.classList.toggle('pizzas')
})
botonVinos.addEventListener('click', ()=>{
    menuVinos.classList.toggle('vinos-dos')
    menuVinos.classList.toggle('vinos')
})
botonCervezas.addEventListener('click', ()=>{
    menuCervezas.classList.toggle('cervezas-dos')
    menuCervezas.classList.toggle('cervezas')
})
botonCocteles.addEventListener('click', ()=>{
    menuCocteles.classList.toggle('cocteles-dos')
    menuCocteles.classList.toggle('cocteles')
})

const cerrarMenu=document.getElementsByClassName('cerrar-menu')

cerrarMenu[0].addEventListener('click', ()=>{
    menuHamburguesas.classList.toggle('hamburguesas-dos')
    menuHamburguesas.classList.toggle('hamburguesas')
})
cerrarMenu[1].addEventListener('click', ()=>{
    menuPastas.classList.toggle('pastas-dos')
    menuPastas.classList.toggle('pastas')  
})
cerrarMenu[2].addEventListener('click', ()=>{
    menuPizzas.classList.toggle('pizzas-dos')
    menuPizzas.classList.toggle('pizzas') 
})
cerrarMenu[3].addEventListener('click', ()=>{
    menuVinos.classList.toggle('vinos-dos')
    menuVinos.classList.toggle('vinos')  
})
cerrarMenu[4].addEventListener('click', ()=>{
    menuCervezas.classList.toggle('cervezas-dos')
    menuCervezas.classList.toggle('cervezas')  
})
cerrarMenu[5].addEventListener('click', ()=>{
    menuCocteles.classList.toggle('cocteles-dos')
    menuCocteles.classList.toggle('cocteles') 
})

//---------------------------------------------------------EVENTOS PRODUCTOS----------------------------------------------------
const clasificador=(seccion, comida)=>{
    const eleccionMenu= seccion.find(ele=> ele.nombre.includes(comida))
    const datosEleccion= eleccionMenu.nombre+" "+eleccionMenu.precio+"$"
    eleccion=eleccionMenu
    registroDeOrden.push(eleccion)
    const pedido= document.createElement('li')
    pedido.innerHTML= datosEleccion 
    listaPedidos.appendChild(pedido)
    //pedido.classList.toggle('gusta')
    localStorage.setItem('guardado', JSON.stringify(registroDeOrden))
    borrador(pedido, eleccionMenu)  
    suma.innerHTML=sumadora(eleccionMenu.precio)
    notificacion.innerText=registroDeOrden.length
    if(registroDeOrden.length==0){
        notificacion.innerText=registroDeOrden.length
    }
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
clasificador(hamburguesas,'Gusta marina')
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
    borrador(pedido, producto) 
    suma.innerHTML=sumadora(producto.precio)
   }) 
   return listaOrdenRecuperada
}
recuperacionDeOrden()
//---------------------------------------------------------NOTIFICACION DE CARRITO LLENO----------------------------------------------------

const notificacionRecuperada=()=>{
if(registroDeOrden.length!==0){
        notificacion.innerText=registroDeOrden.length
    }
}
notificacionRecuperada()


