import { 
    TAREAS_PROYECTO,
    //AGREGAR_PROYECTO,
    AGREAGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    //ESTADO_TAREA, 
    TAREA_ACTUAL,
    ACTUALIAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';



export default (state, action) => {
    switch(action.type){
        case TAREAS_PROYECTO:
            return {
                ...state,
                //en tareasproyecto su valor será el state.tareas.filter y cuando la tarea cuyo proyectoId 
                //es igual al del payload es que se van agregar, ej payloadId = 1
                //tareasproyecto: state.tareasproyecto.filter(tarea => tarea.proyectoId === action.payload)
                //se comentó filter porque ahora se hace desde la API del backend en tareaController get
                tareasproyecto: action.payload
            }
        
        case AGREAGAR_TAREA:
            return {
                ...state,
                //tareas viene del state principal en TareaState = props...
                //agregamos el arreglo de tareas que ya tenemos y le 
                //agregamos otra
                //al cambiar de tareas: [...state.tareas, action.payload],
                //a tareas: [...action.payload],state.tareas -> agregará las tareas en primer lugar de la lista
                tareasproyecto: [action.payload, ...state.tareasproyecto],
                //con errortarea: false se resetea el mensaje de error en caso de activarse
                errortarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload )
            }
        case ACTUALIAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload: tarea )
            }
        /*
        case ESTADO_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? 
                action.payload: tarea )
            }
            */
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload
           }
           //en ACTUALIAR_TAREA tareas: tiene la misma funcion que ESTADO_TAREA
           //-> su puede colocar sobre el case de ESTADO_TAREA
           /*
        case ACTUALIAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ? 
                action.payload: tarea )
            }
            */ 
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaseleccionada: null
            }   
        default:
            return state;
    }
}