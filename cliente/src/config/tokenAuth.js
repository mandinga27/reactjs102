import clienteAxios from './axios';

const tokenAuth = token => {
    //en caso de que haya un token -> lo pasamos al headers
    if(token) {
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        //caso contrario lo vamos a eliminar cuando el usuario cierre sesion o expire
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}

export default tokenAuth;