import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autentificacion/authContext';


const Header = () => {

    //Extraer la información de auntenticación
    const authContext = useContext(AuthContext);
    //usuario es un state y usuarioAtenticado es una funcion
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() => {
        usuarioAutenticado();

        // eslint-disable-next-line
    }, []);

    return (
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre} </span> </
            p> : null}

            <nav className="nav-principal">
                <button
                    className="btn btn-blanco cerrar-sesion"
                    //una vez que el usuario presione el boton cerrará sesión
                    onClick={() => cerrarSesion() }
                >Cerrar Sesión</button>
            </nav>
        </header>
    );
}


export default Header;