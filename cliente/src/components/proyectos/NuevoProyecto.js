import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
//import { makeStyles } from '@material-ui/core';
//import Contenedor from '../layout/Contenedor';


const NuevoProyecto = () => {

    //Obtener el state del formulario sin props con useContext
    const proyectosContext = useContext(proyectoContext);
    //aca vemos el state, inicalmente en false, formulario fue creado en proyectoState.js
    //aca tambien se extraen las funciones
    //se recomienda extraer primero los staes y luego las funciones
    const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

    //State para Tareas
    const [proyecto, guardarProyecto ] = useState({
        nombre: ''
    });

    //Extraer nombre de tarea
    const { nombre } = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario envía un proyecto o cuando el usuario hace submit
    const onSubmitProyecto = e => {
        e.preventDefault();

        //Validar el proyecto
        //pasamos la funcion mostrarError()
        /*esa funcion, va ir a state -> proyecto.State.js,
        identifica a VALIDAR_FORMULARIO, luego se va al reducer protectoReducer.js
        identifica VALIDAR_FORMULARIO y cambia el error como true
        al cambiar a true, se va al ternario creado en Fragment
        {errorformulario ? <p className="mensaje error">El nombre del ../>p> : null }
        -> se evalua como verdadera si el campo esta vacio -> errorformulario ? -> muestra el mensaje  
        */
        if(nombre === '') {
            mostrarError();
            return;
        }
        //Agregar al state
        agregarProyecto(proyecto)
        
        //Reiniciar el form, nombre queda como string vacio
        guardarProyecto({
            nombre: ''
        })
    }

    //Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario();
    }
    

    /*
    const estilos = makeStyles(theme => ({
        offset: theme.mixins.toolbar,
        root: {
            fontSize: 28,
        },
        text: {
            fontSize: 28,
        },
    }));

    const classes = estilos();
    */
    return(
        
        <Fragment>
           
            <button
                type="button"
                className="btn btn-block btn-primario"
                //aca mostramos el formulario al hacer click

                //{ formulario  ? } -> si formulario existe ->
                onClick={ onClickFormulario }
            >Agregar Nueva Postura</button>
            
            { formulario ?
                    (
                        <form
                            className="formulario-nuevo-proyecto"
                            onSubmit={onSubmitProyecto}
                        >
                            <input 
                                type="text"
                                className="input-text"
                                placeholder="Nombre de la Tarea"
                                name="nombre"
                                //value={nombre}
                                onChange={onChangeProyecto}
                            />

                            <input
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Agregar Tarea"
                            />

                        </form>
                    ) : null } 
             { errorformulario ? 
                <p className="mensaje error">El nombre de la Tarea es obligatoria</p>

                : null}        
        </Fragment>
    );

}

export default NuevoProyecto;