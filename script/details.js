
let codigo = location.search;
let codigoProducto = new URLSearchParams(codigo);
let codigoSeleccionado = codigoProducto.get('codigo');

const titulo = document.querySelector('.titulo');
const subtitlo = document.querySelector('.subtitulo');
const descp = document.querySelector('.descp');
const precio = document.querySelector('.precio')
const carousel = document.querySelector('.carousel')

let detalleProducto = JSON.parse(localStorage.getItem('detallesProducto'))
let arrayDetalle = JSON.parse(detalleProducto[0]);

titulo.innerHTML = `La excursion de tu sueño: ${arrayDetalle.Nombre}`;
subtitlo.textContent = `${arrayDetalle.desc_corta}`;
descp.innerHTML = `${arrayDetalle.desc_larga}`
precio.innerHTML =`Precio: ${arrayDetalle.precio} | Duración: ${arrayDetalle.duracion}`
carousel.innerHTML = `
<div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${arrayDetalle.imagen_pincipal}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${arrayDetalle.imagen_1}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${arrayDetalle.imagen_2}" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="${arrayDetalle.imagen_3}" class="d-block w-100" alt="...">
                </div>
              </div>
              </button>

`
const btnVolver = document.querySelector('.btnVolver');
btnVolver.addEventListener('click', function(){
    localStorage.clear()
    location.href = '../index.html'
})