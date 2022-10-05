import { clientServices } from "../service/client.service.js";//si lo uso como modulo tengo que declararlo como ' type="module" ' en el script del html.

const crearNuevaLinea = (nombre, fecha, descripcion, img, id) => {
    const linea = document.createElement("div");//asigno que tipo de elemento crea, y en contenido paso el resto de la estructura
    const contenido = `
    <div class="populares__card">
        <img class="populares__card___imagen" src="${img}"></img>
        <div class="populares__card___base">
            <div class="populares__card___header">
                <div class="populares__principal ">

                    <!--BOTON ELIMINAR-->
                        <button class="populares__boton btn-delete" type="button" id="${id}">                             
                        <i class="populares__icon fas fa-trash-alt"></i>

                    <!--BOTON EDITAR-->                
                        </button>                        
                            <a class="populares__boton btn__edit populares__boton btn__edit" type="submit" href="../editarProducto.html?id=${id}">                                           
                            <i class="populares__icon fas fa-edit"  >
                            </i>            
                            </a>                                            
                        </button>
                </div> 
                <h5 class="populares__card___titulo">${nombre}</h5>
                <time class="populares__card___data" datetime="201-10-14">${fecha}</time>
            </div>
            <div class="populares__card___descripcion">
                ${descripcion}
            </div>
        </div>
    </div>`
    ;
    
    linea.innerHTML = contenido;//transforma la const linea en html con su contenido
    const btn = linea.querySelector('button');
    btn.addEventListener('click',() => {
        const id = btn.id;
        clientServices
            .eliminarPoducto(id)
            .then((respuesta) => {
                console.log(respuesta);
            })
            .catch((err) => alert("Ocurrió un error en la eliminación"));
    });

   
    return linea;//lo devuelve para que se muestre
}

const table = document.querySelector('[data-card]')//llama a traves a colocar en la clase 'data-table' la constante 'table'-> es importante las [ ]

clientServices
    .listaJuegos()
    .then((data) => {
        data.forEach(({nombre, fecha, descripcion, img, id}) => {// ver en Notion JS CRUD captura de otra manera de hacerlo
            const nuevaLinea = crearNuevaLinea(nombre, fecha, descripcion, img, id);
            table.appendChild(nuevaLinea);
        });
    })
    .catch((error) => alert("Ocurrio un error en clientService"));


