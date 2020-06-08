import { 
    REGISTRO_EXITOSO, 
    REGISTRO_ERROR, 
    OBTENER_USUARIO, 
    LOGIN_EXITOSO, 
    LOGIN_ERROR, 
    CERRAR_SESION 
} from '../../types';


export default (state, action) => {

    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }
        case OBTENER_USUARIO:
            return {
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }
        //CERRAR SESION, LOGIN ERROR Y REGISTRO ERROR HACEN CASI LO MISMO POR ESO ESTAN JUNTOS
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            //en caso de error removemos el token creado
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false
            }                    
        default:
            return state;
    }
}