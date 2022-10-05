//abrir http (metodo, url)
//CRUD: CREATE- POST | READ - GET | UPDATE - PUT OR PATCH | DELETE - DELETE

//Fetch API:
const listaJuegos = () => 
    fetch('http://localhost:3000/juegos').then((respuesta) => respuesta.json());

const crearProducto = (tipo, nombre, fecha, descripcion, img) => {
    return fetch('http://localhost:3000/juegos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({tipo, nombre, fecha, descripcion, img, id: uuid.v4() }),//el JSON.stringify resetea a texto para mandarlo a http, el uuid.v4() arma el ID incremental
    });
};

const eliminarPoducto = (id) => {
    console.log('Eliminar a ->', id);
    return fetch(`http://localhost:3000/juegos/${id}`, {
        method: 'DELETE',
    })
}

const detalleUser =(id) => {
    return fetch(`http://localhost:3000/user/${id}`).then((respuesta) => respuesta.json());
};

const detalleProducto =(id) => {
    return fetch(`http://localhost:3000/juegos/${id}`).then((respuesta) => respuesta.json());
};

const actualizarProducto =  (tipo, nombre, fecha, descripcion, img, id) => {
    return fetch (`http://localhost:3000/juegos/${id}`,  {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({ tipo, nombre, fecha, descripcion, img}),
    })
    .then ((respuesta) => respuesta)
    .catch((err) => console.log(err));
}

const loginUser =  (/* nombre, contraseña, id */id) => {
    return fetch (`http://localhost:3000/user/${id}`,  {
        /* method: 'GET',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify({ nombre, contraseña}), */
    })
    .then ((respuesta) => respuesta)
    .catch((err) => console.log(err));
}

export const clientServices = {
    listaJuegos,
    crearProducto,
    eliminarPoducto,
    detalleProducto,
    actualizarProducto,
    detalleUser,
    loginUser,
};