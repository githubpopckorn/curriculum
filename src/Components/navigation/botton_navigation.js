import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import { blue600 } from 'material-ui/styles/colors';

import {FaHome, FaGraduationCap, FaUserSecret, FaFolderOpen} from 'react-icons/lib/fa';



const recentsIcon = <IconLocationOn />;
const favoritesIcon = <IconLocationOn />;
const nearbyIcon = <IconLocationOn />;


class BottomNavigationApp extends Component {
  state = {
    selectedIndex: 0,
  };

  constructor(props){
    super(props);
    console.log(this.props.history)
  }

  select = (index) => this.setState({selectedIndex: index});

  handleClick = (url, index) => {
    this.props.history.push(url)
    this.setState({selectedIndex: index})
  }

  render() {
    return (
      <Paper zDepth={1} style={{position: "fixed", bottom:"0", width:"100%"}}>
        <BottomNavigation selectedIndex={this.state.selectedIndex} style={{backgroundColor: blue600}}>
          <BottomNavigationItem
            label="Home"
            icon={<FaHome/>}
            onClick={() => this.handleClick('/', 0)}
          />
          <BottomNavigationItem
            label="Formacion"
            icon={<FaGraduationCap/>}
            onClick={() => this.handleClick('/formacion', 1)}
          />
          <BottomNavigationItem
            label="Habilidades"
            icon={<FaUserSecret/>}
            onClick={() => this.handleClick('/habilidades',2)}
          />

          <BottomNavigationItem
            label="Proyectos"
            icon={<FaFolderOpen/>}
            onClick={() => this.handleClick('/proyectos',3)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNavigationApp;