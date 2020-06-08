import React from 'react';
import NuevoProyecto from '../proyectos/NuevoProyecto';
import ListadoProyectos from '../proyectos/ListadoProyectos';

const Sidebar = () => {
    return(
        <aside>
            <h1>Tareas Diarias</h1>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Escoja una Postura<span> de la lista</span></h2>

                <ListadoProyectos />

            </div>
        </aside>
    );
}

export default Sidebar;