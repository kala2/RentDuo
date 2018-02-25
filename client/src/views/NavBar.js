import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import * as utils from '../components/Utilities.js';

var USERNAME = localStorage.getItem('token');

class Login extends Component {
    static muiName = 'FlatButton';
  
    render() {
      return (
        <FlatButton {...this.props} label={this.props.label} href={this.props.href} />
      );
    }
}

class MenuButton extends Component {
    static muiName = 'FlatButton';
    render() {
      return (
        <FlatButton {...this.props} label={this.props.label} href={this.props.href} className="noMarginTop" />
      );
    }
}

class Logged extends Component {

  constructor(props){
		super(props);

		this.handleLogoutClick= this.handleLogoutClick.bind(this);
	}
	
	handleLogoutClick(event) {
		utils.handleOnLogout({'Username': USERNAME});
	}

  render() {
    return (
      <div>
      
  <IconMenu
      iconButtonElement={
              <IconButton ><MoreVertIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
      <MenuItem primaryText="Refresh" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" onClick={this.handleLogoutClick} />
  </IconMenu>
   </div>
    );
  }
}
  
Logged.muiName = 'IconMenu';

export default class NavBar extends Component {

  checkAuthentication = (dataFromChild) => {
    console.log("the login.js dataFromChild", dataFromChild);
    this.props.checkAuthentication(true);
  }

  render() {
    return (
        <AppBar className="navBar"
            iconElementLeft={<img className="logoImg" src="../../images/logoResized.png" alt="logo"></img>}
            iconElementRight={
                this.props.isAuthenticated ? 
                <div className="row marginTop">
                  <div className="NavBtnRight">
                    <MenuButton href="/" label="Home"/>
                  </div><Logged />
                </div> : (
                <div className="row marginTop">
                  <div className="NavBtnRight">
                    <MenuButton href="/" label="Home"/>
                    <Login href="/login" label="Login"/>
                    <MenuButton href="/register" label="Register"/>
                  </div>
                </div>
              )
            }
        />
    );
  }
}
