import { FORMULARIO_TAREA, 
        OBTENER_PROYECTOS, 
        AGREGAR_PROYECTO,
        PROYECTO_ERROR,
        VALIDAR_FORMULARIO,
        PROYECTO_ACTUAL,
        ELIMINAR_PROYECTO
     } from '../../types';


export default (state, action) => {
    switch(action.type) {
        case FORMULARIO_TAREA:
            return {
                //aca toma una copia del state con todo lo que tenga y lo cambia a true el formulario
                ...state,
                formulario : true
            }
        case OBTENER_PROYECTOS:
            return {
                ...state,
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                //se copia el state actual
                ...state,
                //se toma el state con los proyectos y se agrega el nuevo con action.payload
                proyectos: [...state.proyectos, action.payload],
                //despues que se agrega el proyecto quedara como false para que se reinicie
                formulario: false,
                //una vez que se valida y se agrega la nueva tarea, reseteamos el errorformulario 
                //para que deje de aparecer en pantalla
                errorformulario: false
                
            }
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                //vamos a poner un filtro, 
                //hace una iteración con cada uno de ellos comparandolos, extrae el que se elige como proyecto actual
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload )
            }
        case ELIMINAR_PROYECTO:
            return {
                //aca recorre los proyectos pero deja afuera el que queremos eliminar !==..
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== 
                    action.payload ),
                    proyecto: null
            }
        case PROYECTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }      
        default:
            return state;
    }
}