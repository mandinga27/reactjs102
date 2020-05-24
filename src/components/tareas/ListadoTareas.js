import React, {Fragment, useContext} from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListadoTareas = () => {


    //extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //Obtener las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;
    
    //si no hay ningun proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    //eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id)
    }

    return (
        //ul = order list
        <Fragment>
            <h2>Postura: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)                   
                    : 
                    <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                        <CSSTransition
                            key={tarea.id}
                            timeout={550}
                            classNames="tareas"
                        >
                            <Tarea
                                //le vamos a pasar un key                                
                                tarea={tarea}
                            />
                        </CSSTransition>
                    ))}
                    </TransitionGroup>
                }

            </ul>
            
            <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={onClickEliminar}
                >Eliminar Proyecto &times;</button>
            
        </Fragment>
        
    );
}

export default ListadoTareas;