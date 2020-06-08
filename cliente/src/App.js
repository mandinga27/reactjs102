import React from 'react';
//import Footer from './components/layout/Footer'

//importamos BrowserRouter para crear nuestras rutas
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Login from './components/auth/Login';
//import Registro from './components/auth/Registrobk';
import Proyectos from './components/proyectos/Proyectos';
//import Landingpage from './components/pages/Landingpage';
//import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';
import AlertaState from './context/alertas/alertaState';

import AuthState from  './context/autentificacion/authState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';

//Revisar su tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}

function App() {
  return (
    //todo lo que este destro del Switch serán nuestras diferentes paginas
    //todo lo que este por fuera de Switch es lo que se vera en todas las paginas
    //agregamos nuestro ProyectoState para el Provider
    //se poner al inicio para que este disponible para todos los componentes y props  la app
    //similar a redux pero en context
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
                <Route path="/login" component={Login} />
                <Route path="/registro" component={Registro} />         
              </Switch>     
            </Router>  
          </AuthState>          
        </AlertaState>
      </TareaState>
    </ProyectoState>
       
  );
}

//<Route exact path="/registro" component={Registro} />
export default App;
