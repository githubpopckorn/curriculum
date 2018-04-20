import React from 'react';
import { BrowserRouter as ReactRouter, Route, Switch } from 'react-router-dom';
import App from "./App";
import Home from "./pages/Home";
import Formacion from "./pages/formacion";
import Skills from "./pages/skills";
import Proyectos from "./pages/proyectos";




class Router extends React.Component {



  render(){
    return(
      <ReactRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/formacion" component={Formacion}></Route>
            <Route exact path="/habilidades" component={Skills}></Route>
            <Route exact path="/proyectos" component={Proyectos}></Route>
          </Switch>
        </App>
      </ReactRouter>
    );
  }
}

export default Router;