import { clientServices } from "../service/client.service.js";

const formularioLogin = document.querySelector('[data-login]');

//EJEMPLO PARA CAMBIAR TODAS A ESTA CON ASYNC AWAIT TRY CATCH
const validarUser = async ()=> { //como es funcion anonima ponemos el async antes de la funcion '() => {} '
    /* const url = new URL(window.location);
    console.log('esta es la url busca por id a:', url.searchParams.get('id'));
    const id = url.searchParams.get('id'); */
    
    const nombre = document.querySelector('[data-nombre-user]');
    const contraseña = document.querySelector('[data-contraseña-user]');
      
    try {        
        const user = await clientServices.detalleUser(0);        
        if(user.nombre && user.contraseña){   
                //if
                ((nombre.value == user.nombre) && (contraseña.value == user.contraseña))
                    console.log('user desde controlador: ',nombre.value, nombre.value);
                    console.log('user desde service user/0: ',user.nombre, user.contraseña);                    

                    return ('Las credenciales son CORRECTAS')                    
                //window.location.href = '../index.html';
            } else {
            throw new Error ('NO INGRESA A LA FUNCION');}
    } catch (error) {
        console.log('Catch Error - ', error);
        alert('Hubo un error');
        //window.location.href = 'index.html';
    }    
};

validarUser();

formularioLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();//previene el funcionamiento normal del formulario asi pdoemos gestionarlo con js
    const url = new URL(window.location);
    console.log('esta es la url busca por id  en form  a:', url.searchParams.get('id'));
    const id = url.searchParams.get('id');

    const nombre = document.querySelector('[data-nombre-user]').value;
    const contraseña = document.querySelector('[data-contraseña-user]').value;
    console.log(nombre, ' - ',contraseña);

    clientServices.loginUser(0).then(()=> {
        return ('Ingreso correcto')
        //window.location.href = "../juegos.html"
    })

})