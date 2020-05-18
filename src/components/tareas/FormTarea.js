import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


//Proyectocontext tiene todo el state y las funciones

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;
    
    //Obtener la funcion del Context de tareas
    //se recomienda importar los states primero y las funciones despues
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas,
    actualizarTarea, limpiarTarea } = 
    tareasContext;
    
    //Effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada)
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

    //State del formulario
    //Array destructuring para ecxtarer el proyecto actual
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //extraer el nombre del proyecto con destructuring
    const { nombre } = tarea;
    
    //si no hay ningun proyecto seleccionado
    if(!proyecto) return null;

    //Array destructuring para ecxtarer el proyecto actual
    const [proyectoActual] = proyecto;

    //Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ///obtendremos una copia de las tareas
            //si queremos agregar mas campo a futuro
            //no va a ser necesario modificar esta funcion
            ...tarea,
            [e.target.name] : e.target.value
        })
    }
    
    //evento para agregar tarea cuando aprete click
    const onSubmit = e => {
        e.preventDefault();
        //ahora hay que hacer estas acciones

        //validar tarea, trim remmueve espacios vacios, === a string vacio
        if(nombre.trim() === '') {
            validarTarea();
            //return para que no se ejecute la proxima linea se detenga la efecucion
            return;
        }

        //Si es edicion o si es nueva tarea
        if(tareaseleccionada === null) {
            //agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        } else {
            //actualizar tarea existente
            actualizarTarea(tarea);

            //Elimina tarea seleccionada del state
            limpiarTarea(tarea);
        }
        //pasar la validacion


        //Obtener y filtrar kas tareas del proyecto actual
        //con proyectoActual.id toma el id como payload
        obtenerTareas(proyectoActual.id)
        
        //reiniciar el formulario
        guardarTarea({
            nombre: ''
        })
    }

    return (
        <div className="formulario">
            <form
            //agregaremos un evento para agregar tareas
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Nombre de la Tarea.."
                        name="nombre"
                        //con value se reinicia el form
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        //si tenemos una tarea seleccionada y no esta como null -> va a ser editar
                        //caso contrario va a ser agregar tarea
                        value={tareaseleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>

            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>
            : null }
        </div>

    );
}



export default FormTarea;