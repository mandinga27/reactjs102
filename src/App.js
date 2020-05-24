import React from 'react';
//import Footer from './components/layout/Footer'

//importamos BrowserRouter para crear nuestras rutas
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Registro from './components/auth/Registro';
import Proyectos from './components/proyectos/Proyectos';

import ProyectoState from './context/proyectos/proyectoState';
import TareaState from './context/tareas/tareaState';

function App() {
  return (
    //todo lo que este destro del Switch serán nuestras diferentes paginas
    //todo lo que este por fuera de Switch es lo que se vera en todas las paginas
    //agregamos nuestro ProyectoState para el Provider
    //se poner al inicio para que este disponible para todos los componentes y props  la app
    //similar a redux pero en context
    <ProyectoState>
      <TareaState>
        <Router>
          <h1>Fuera del Proyecto</h1>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/registro" component={Registro} />
            <Route exact path="/proyectos" component={Proyectos} />
          </Switch>     
        </Router>  
      </TareaState>
    </ProyectoState>
       
  );
}

export default App;
