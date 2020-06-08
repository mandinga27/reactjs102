import React, { useReducer } from 'react';
import alertaReducer from './alertaReducer';
import alertaContext from './alertaContext';

import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../../types';

const AlertaState = props => {
    const initialState = {
        alerta : null
    }

    const [ state, dispatch ] = useReducer(alertaReducer, initialState);

    //Funciones
    //esta alerta toma dos parametros, msg y categoria
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg,
                categoria
            }
        });
        //despues de 5 seg -> un segundo dispatch
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
            //5000 significa que despues de 5 segundos desaparecerá la alerta
        }, 5000);
    }

    return (
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}
        </alertaContext.Provider>
    )
}

export default AlertaState;