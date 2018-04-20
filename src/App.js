import React, { Component } from 'react';
import './App.css';
import AppBar from './Components/navigation/MyAppBar';
import { withRouter } from 'react-router-dom';


//Material Design
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNavigationApp from "./Components/navigation/botton_navigation";

class App extends Component {

  constructor(props){
    super(props);

  }


  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar/>
          { this.props.children }
          <BottomNavigationApp history={this.props.history}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
