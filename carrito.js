/*

const tarjetas = document.getElementById('tarjetas')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template.footer').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()

let carritoVacio = {};

document.addEventListener('DOMcontentLoaded', () => {
    fetchData()
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        llenarCarrito()
    }
})
tarjetas.addEventListener('click', e => {
    addCarrito(e)
})


items.addEventListener('click', e => {
    btnAccion(e)
})


const fetchData = async () => {
    try {
        const res = await fetch('productos.json')
        const data = await res.json()
        // console.log(data);
        cards(data)
    } catch (error) {
        console.log(error);
    }
}

// productos

const cards = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.nombre
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.img)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id


        const clonar = templateCard.cloneNode(true)
        fragment.appendChild(clonar)
    })
    tarjetas.appendChild(fragment)
}

const carrito = e => {
    // console.log(e.target);
    // console.log(e.target.classList.contains('btn-dark'))
    if (e.target.classList.contains('btn-dark')) {
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}


const setCarrito = objeto => {
    console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        nombre: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoVacio[producto.id].cantidad + 1
    }
    carritoVacio[producto.id] = {
        ...producto
    }
    llenarCarrito()

}

// Agregar productos al carrito

const llenarCarrito = () => {
    // console.log(carrito)
    items.innerHTML = ''
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.nombre
        templateCarrito.querySelectorAll('td')[1].textContent = producto.cantidad
        templateCarrito.querySelector('.btn-info').dataset.id = producto.id
        templateCarrito.querySelector('.btn-danger').dataset.id = producto.id
        templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)

    })
    items.appendChild(fragment)

    cambiarFooter()

    localStorage.setItem('carrito', JSON.stringify(carrito))

}


const cambiarFooter = () => {
    footer.innerHTML = ''
    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">carrito vacio - comience a comprar!</th>
        `
        return
    }

    const nCantidad = object.values(carrito).reduce((acc, {
        cantidad
    }) => acc + cantidad, 0)
    const nPrecio = object.values(carrito).reduce((acc, {
        cantidad,
        precio
    }) => acc + cantidad * precio, 0)

    templateFooter.querySelectorAll('td')[0].textContent = nCantidad
    templateFooter.querySelector('span').textContent = nPrecio

    const clone = templateFooter.cloneNode(true)
    fragment.appendChild(clone)
    footer.appendChild(fragment)

    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = {}
        llenarCarrito()
    })

}

// accion de los botones

const btnAccion = e => {
    console.log(e.target)
    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad ++
        carrito[e.target.dataset.id] = {...producto}
        llenarCarrito()
    }
    if (e.target.classList.contains('btn-danger')){
        const producto = carrito[e.target.dataset.id]
        producto.cantidad --
        if(producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        llenarCarrito()
    }

    e.stopPropagation()
}

*/