const containerCard = document.querySelector(".container_Cards")

fetch('../datos/productos.json')
    .then((respuesta) => {
        return respuesta.json()
    })
    .then((productos) => {
        //console.log(productos) //Esto te permite ver lo que trae la respuesta
        productos.forEach(producto => {
            //Aquí agregas contenido de forma dinámica en la página
            //Acuerdate que estos datos vienen del archivo en formato json creado
            //El cual está en la carpeta datos - productos.json
            containerCard.innerHTML += `
                <div class="p-0 card col-12 col-md-6 col-lg-2" style="width: 30rem;">
                    <img src="${producto.imagen_pincipal}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title">${producto.Nombre}</h3>
                    <p class="card-text" >${producto.desc_corta}</p>
                     <a id='${JSON.stringify(producto)}' href="#" class="btnDetalle btn btn-primary">Conoce mas</a>
                    </div>
                </div> 
        `
        })
        let btnDetalle = document.querySelectorAll('.btnDetalle')
        
        let arrayProductos
        let Objeto
        let idProducto

        btnDetalle.forEach(productoSeleccion => {
            productoSeleccion.addEventListener('click', function (e) {
                e.preventDefault()
                let miListaDeProductos = localStorage.getItem('detallesProducto')
                if (miListaDeProductos == null) {
                    arrayProductos = [];
                } else {
                    arrayProductos = JSON.parse(miListaDeProductos)
                }
                arrayProductos.push(this.id)
                Objeto = JSON.parse(arrayProductos[0])
                idProducto = Objeto.codigo
                localStorage.setItem('detallesProducto', JSON.stringify(arrayProductos))
                location.href = `./public/details.html?codigo=${idProducto}`
            })
        })
    })
    .catch((error) => {
        console.log('Ufff ha ocurrido un error ' + error)
    })


