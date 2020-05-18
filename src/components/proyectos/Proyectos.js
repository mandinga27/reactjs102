import React from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import FormTareas from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';


const Proyectos = () => {
    return(

        
        <div className="contenedor-app">
           <Sidebar />

            <div className="seccion-principal">

                <Header />
                
                <main>
                    <FormTareas />

                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Proyectos;