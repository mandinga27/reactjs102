import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO,
    AGREAGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    //ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

import clienteAxios from '../../config/axios';


const TareaState = props => {
    const initialState = {
        /*
        tareas: [
            { id: 1, nombre: 'Trabajo en Caliente', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Trabajo en Alturas', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Izajes', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Bloqueo', estado: true, proyectoId: 4},
            { id: 5, nombre: 'Trabajo en Alturas', estado: true, proyectoId: 2},
            { id: 6, nombre: 'Bloqueo', estado: false, proyectoId: 4},
            { id: 7, nombre: 'Izajes', estado: false, proyectoId: 3},
            { id: 8, nombre: 'Trabajo en Caliente', estado: true, proyectoId: 1}
        ],
        */
        //crearemos un state para tareas proyecto
        //esto es para que en el inicio no halla ninguna tarea seleccionada
        //tiene que seleccionar alguna tarea
        tareasproyecto: [],
        //errortarea si el usuario comete un error pasa a true
        errortarea: false,
        //la primera vez que carge nuestra aplicacion no tendra ninguna tarea seleccionada
        tareaseleccionada: null
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);


    //Crear las funciones

    //1. Obtener las tareas de un proyecto
    //esta funcion la vamos a utilizar en proyecto de Proyecto.js
    const obtenerTareas = async proyecto => {
        //la funcion obtener tareas se va a ejecutar cuando el usuario seleccione un proyecto
        //en Proyecto.js onClick
        //para eso hay que crear el reducer
        console.log(proyecto);
        try {
            const resultado = await clienteAxios.get('/api/tareas', { params: { proyecto }});
            console.log(resultado);

            dispatch({
                type: TAREAS_PROYECTO,
                payload: resultado.data.tareas
            })

        } catch (error) {
            console.log(error);
        }
        
    }

    //2. Agregar una tareas al proyecto seleccionado
    const agregarTarea = async tarea => {
        try {
            const resultado = await clienteAxios.post('/api/tareas', tarea);
            console.log(resultado);
            
            dispatch({
                type: AGREAGAR_TAREA,
                payload: tarea
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    //Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA,
            //no va tomar ningun payload
        })
    }

    //Eliminar tarea por id
    const eliminarTarea = async (id, proyecto) => {
        try {
            await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto }});
            dispatch({
                type: ELIMINAR_TAREA,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

     //Edita o modifica una tarea
     const actualizarTarea = async tarea => {
        console.log(tarea);
        try {
            const resultado = await clienteAxios.put(`/api/tareas/${tarea._id}`, tarea);
            console.log(resultado);

            dispatch({
                type: ACTUALIAR_TAREA,
                payload: resultado.data.tarea
            })
        } catch (error) {
            console.log(error);
        }
    }
    //Cambia el estado de cada tarea
    /*
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    */

    //Extrae una tarea para edicion
    const guardarTareaActual = tarea => {   
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }
    
   

    //Elimina la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }


    return (
        //vamos a pasar las tareas al Provider
        <TareaContext.Provider
            value = {{
                //tareas: state.tareas,
                tareasproyecto : state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                //cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>  
    )
}

export default TareaState;