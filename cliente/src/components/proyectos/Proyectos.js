import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';
import FormTareas from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';
import AuthContext from '../../context/autentificacion/authContext';

const Proyectos = () => {

    //Extraer la informacion de autentificacion
    const authContext = useContext(AuthContext);
    const { usuarioAutenticado } = authContext;

    //useEffect para cuando se cambie, cuando se actulice vamos a obtener esa infromacion 
    useEffect(() => {
        usuarioAutenticado();

        // eslint-disable-next-line
    }, [])

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