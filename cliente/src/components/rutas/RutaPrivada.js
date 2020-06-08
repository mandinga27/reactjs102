import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/autentificacion/authContext';

//esto es un Higher Order component para redirigir a usuarios no logeados a la pagina principal
const RutaPrivada = ({ component: Component, ...props }) => {


    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;

    useEffect(() => {
        usuarioAutenticado();

        // eslint-disable-next-line
    }, []);

    return ( 
        <Route { ...props } render={ props => !autenticado  && !cargando ? (
            <Redirect to="/" />
           
        ) : (
            <Component {...props} />
        ) } />
    );

}

export default RutaPrivada;