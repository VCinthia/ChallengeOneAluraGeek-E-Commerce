import { clientServices } from "../service/client.service.js";

const formulario = document.querySelector('[data-form-edit]');

//EJEMPLO PARA CAMBIAR TODAS A ESTA CON ASYNC AWAIT TRY CATCH
const obtenerInformacion = async ()=> { //como es funcion anonima ponemos el async antes de la funcion '() => {} '
    const url = new URL(window.location);
    console.log('esta es la url busca por id a:', url.searchParams.get('id'));
    const id = url.searchParams.get('id');

    if(id === null){
        //window.location.href = '/screens/error.html'
    }

    const tipo = document.querySelector('[data-tipo-producto]');
    const nombre = document.querySelector('[data-nombre-producto]');
    const fecha = document.querySelector('[data-fecha-producto]');
    const descripcion = document.querySelector('[data-descripcion-producto]');
    const img = document.querySelector('[data-img-producto]');

    try {
        const perfil = await clientServices.detalleProducto(id)
        if(perfil.tipo && perfil.nombre && perfil.fecha && perfil.descripcion && perfil.img){            
            tipo.value = perfil.tipo;
            nombre.value = perfil.nombre;
            fecha.value = perfil.fecha;
            descripcion.value = perfil.descripcion;
            img.value = perfil.img;
        } else {
            throw new Error ();
        }
    } catch (error) {
        console.log('Catch Error - ', error);
        alert('Hubo un error');
        //window.location.href = 'index.html';
    }    
};

obtenerInformacion();

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();//previene el funcionamiento normal del formulario asi pdoemos gestionarlo con js
    const url = new URL(window.location);
    console.log('esta es la url busca por id  en form  a:', url.searchParams.get('id'));
    const id = url.searchParams.get('id');

    const tipo = document.querySelector('[data-tipo-producto]').value;
    const nombre = document.querySelector('[data-nombre-producto]').value;
    const fecha = document.querySelector('[data-fecha-producto]').value;
    const descripcion = document.querySelector('[data-descripcion-producto]').value;
    const img = document.querySelector('[data-img-producto]').value;

    console.log(tipo, ' - ',nombre, ' - ',fecha, ' - ',descripcion, ' - ',img);

    clientServices.actualizarProducto(tipo, nombre, fecha, descripcion, img, id).then(()=> {
        window.location.href = "../juegos.html"
    })

})