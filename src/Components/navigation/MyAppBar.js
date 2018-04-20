import React from 'react';
import AppBar from 'material-ui/AppBar';
import { blue600 } from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';

class MyAppBar extends React.Component{


  render(){
    return(
      <AppBar
        title="Mi Curriculum Vitae"
        style={{'backgroundColor':blue600}}
        showMenuIconButton={true}
      >


      </AppBar>
    );
  }
}

export default MyAppBar;