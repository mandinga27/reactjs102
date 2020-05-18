import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { Dropdown } from 'semantic-ui-react';


const Registro = () => {

    //State para iniciar sesión
    //los states tiene que tener el mismo nombre que name ej name=nombre
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        apellido: '',
        ciudad: '',
        telefono: '',
        email:'',
        password: '',
        confirmar: ''
    });

    //extraer de usuario
    const {nombre, apellido, cuidad, telefono, email, password, confirmar} = usuario;

    //aqui vamos a ir guardando en el State
    const onChange = e => {
        guardarUsuario({
            //traemos la copia de usuario para lo que este en el State no se 
            //sobre escriba en otra pieza de esta
            //para reescribir la actual -> [e.target.name] : e.target.value
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        //Validar que no haya campos vacios

        //Password minimo de 6 caracteres

        //Los dos passwors son iguales

        //Pasarlo al action
    }

    /*
    const cityOptions = [
        { key: 'ar', value: 'ar', flag: 'ar', text: 'Arica' },
        { key: 'iq', value: 'iq', flag: 'iq', text: 'Iquique' },
        { key: 'an', value: 'an', flag: 'an', text: 'Antofagasta' },
        { key: 'cl', value: 'cl', flag: 'cl', text: 'Calama' },
    ]

    */
    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Obtener una Cuenta</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="text">Nombres</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Ingresa tus Nombres"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="text">Apellidos</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Ingresa tus Apellidos"
                            value={apellido}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="text">Cuidad</label>
                        <input
                            type="text"
                            id="cuidad"
                            name="cuidad"
                            placeholder="Ingresa tu Ciudad de Nacimiento"
                            value={cuidad}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="text">Teléfono Móvil</label>
                        <input
                            type="text"
                            id="telefono"
                            name="telefono"
                            placeholder="Ingresa tu Móvil"
                            value={telefono}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Ingresa tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Registrarme" />
                    </div>

                </form>
               
                <Link to={'/'} className="enlace-cuenta">
                    Volver a Iniciar Sesión
                </Link>

            </div>
        </div>
    )};

export default Registro;