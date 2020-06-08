import React, {useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

//ternario {tarea.estado ? (): ...}
const Tarea = ({tarea})=> {

    //Extrae si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas,  actualizarTarea/*cambiarEstadoTarea*/, guardarTareaActual } = tareasContext;


    //Extraer el proyecto
    const [proyectoActual] = proyecto;

    //Funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id, proyectoActual._id);
        //proyectoActual se esta extrayendo mas arriba
        obtenerTareas(proyectoActual.id)
    }

    //funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        //revisamos el estado de la tarea true or false
        if(tarea.estado) {
            tarea.estado = false;
        } else {
            tarea.estado = true
        }
        actualizarTarea(tarea);
    }

    //Agrega una tarea actual cuando el usuario desea editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre} </p>

            <div className="estado">
                {tarea.estado
                ?  
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>                   
                    )
               :    
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>                    
                    )
                }
            </div>

            <div className="acciones">

            <button 
                type="button"
                className="btn btn-primario"
                onClick={() => seleccionarTarea(tarea) }
            >Editar</button>

            
            <button 
                type="button"
                className="btn btn-secundario"
                //onClick se pasa con un arraw function
                onClick={() => tareaEliminar(tarea._id)}
            >Eliminar</button>

            </div>
        </li>
        
    );   
}

export default Tarea;