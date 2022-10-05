import { clientServices } from "../service/client.service.js";

const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tipo = document.querySelector('[data-tipo-producto]').value;
    const nombre = document.querySelector('[data-nombre-producto]').value;
    const fecha = document.querySelector('[data-fecha-producto]').value;
    const descripcion = document.querySelector('[data-descripcion-producto]').value;
    const img = document.querySelector('[data-img-producto]').value;

    //console.log(nombre, ' - ', email);
    clientServices
        .crearProducto(tipo, nombre, fecha, descripcion, img)
        .then(() => {
        
        alert("Cargado correctamente");
        window.location.href = 'juegos.html';
    })
    .catch((err) => console.log(err));
});

//otra manera

/* const nuevoProducto = (tipo, nombre, fecha, descripcion, img) => {
    const card = document.createElement("div");
    const contenido = `
    <div class="populares__card">
        <img class="populares__card___imagen" src="${img}"></img>
        <div class="populares__card___base">
            <div class="populares__card___header">
                <div class="populares__principal btn__delete">
                        <!--BOTON ELIMINAR-->
                    <button class="populares__boton ">                             
                        <i class="populares__icon fas fa-trash-alt"></i>                          
                    </button>
                        <!--BOTON EDITAR-->
                    <button class="populares__boton btn__edit">
                        <i class="populares__icon fas fa-edit"></i>                     
                    </button>
                </div> 
                <h5 class="populares__card___titulo">${nombre}</h5>
                <time class="populares__card___data" datetime="201-10-14">${fecha}</time>
            </div>
            <div class="populares__card___descripcion">
                ${descripcion}
            </div>
        </div>
    </div>`;
    card.innerHTML = contenido;
    card.classList.add('card')
    return card;
} */