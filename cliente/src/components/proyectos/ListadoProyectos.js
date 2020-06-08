import React, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import proyectoContext from '../../context/proyectos/proyectoContext';
import AlertaContext from '../../context/alertas/alertaContext';

import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ListadoProyectos = () => {

    //extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const { mensaje, proyectos, obtenerProyectos } = proyectosContext;
    
    const alertaContext= useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //useeffecr reemplaza a los componentes del ciclo de vida
    //usaremos useEffect () => {} para obtener proyectos cuando carga el componente
    
    //Obtener proyectos cuando carga el componente
    useEffect(() => {

        //si hay un error
        if(mensaje) {
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }
        

        obtenerProyectos();
        // eslint-disable-next-line
    }, [mensaje]);
     
    

    //revisar si proyectos tiene contenido, si no hay despliega un msj
    if(proyectos.length === 0) return <p>No hay Proyectos, comienza creando uno</p>;


    return (

        <ul className="listado-proyectos">
            { alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}

            <TransitionGroup>
            {proyectos.map(proyecto => (
                <CSSTransition
                    key={proyecto._id}
                    timeout={200}
                    classNames="proyecto"
                >
                    <Proyecto
                        proyecto={proyecto}
                />
                </CSSTransition>
                
            ))}
            </TransitionGroup>
            
        </ul>
    );
}

export default ListadoProyectos;