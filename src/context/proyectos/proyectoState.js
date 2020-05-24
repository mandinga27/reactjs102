import React, { useReducer } from 'react';

import {v4 as uuidv4} from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer'; 
//importamos los types
import { FORMULARIO_TAREA, 
         OBTENER_PROYECTOS ,
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         ELIMINAR_PROYECTO
} from '../../types';


//en gral esto es un hook
//agregamos nueva variable proyectoState que sera el state inicial
const ProyectoState = props => {

    const proyectos = [   
        {id: 1, nombre: 'Trabajo en Altura' },
        {id: 2, nombre: 'Trabajo en Caliente' },
        {id: 3, nombre: 'Trabajo en Bloqueo' },
        {id: 4, nombre: 'Trabajo en Izajes' }
    ]
     
    //aca se cargan todos los states que estaN en el inicio
    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        //aca proyecto será la tarea selecionada en el menu de la izq.
        proyecto: null
    }
             

    //dispatch para ejecutar las acciones o types, es un hook
    //useReducer es similar a useState
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_TAREA
        })
    }

    //Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })     
    }

    //Agregar nuevo proyecto
    const agregarProyecto =  proyecto => {
        //Aca se agrega el id
        proyecto.id = uuidv4();

        //luego de asignar el id -> Insertar el proyecto en el state con dispatch
        dispatch({
            type: AGREGAR_PROYECTO,
            //este el payload para cambiar el state
            payload: proyecto
        })
        
    }

    //Validar el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // funcion que Selecciona la Tarea que el usuario hizo click
    //proyectoActual le pasaremos como payload-> proyecto en un arraw fucntion
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //elimina un proyecto
    const eliminarProyecto = proyectoId => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })    
    }
    
    return (
        //desde aqui nacen los datos
        //le pasamos props.children para lo que le vallamos a pasar
        //los diferentes componentes que sean hijos del provider
        //se pasen los datos a lo largo de todos los diferenrtes componentes
        //formulacio = state; mostrarFormulario = funcion
        <proyectoContext.Provider
            value={{
                //se recomienda poner los states arriba y las funciones abajo
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                //proyecto contine el valor que tendra del state.proyecto
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}      
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;