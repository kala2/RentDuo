import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

class Login extends Component {
    static muiName = 'FlatButton';
  
    render() {
      return (
        <FlatButton {...this.props} label="Login" />
      );
    }
}

class Demo extends Component {
    static muiName = 'FlatButton';
  
    render() {
      return (
        <FlatButton {...this.props} label="Demo" className="noMarginTop" />
      );
    }
}
  
const Logged = (props) => (
    <div>
    
<IconMenu
    {...props}
    iconButtonElement={
       
            <IconButton ><MoreVertIcon /></IconButton>
            
       
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
>
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
</IconMenu>
 </div>
);

Logged.muiName = 'IconMenu';

export default class NavBar extends Component {

  checkAuthentication = (dataFromChild) => {
    console.log("the login.js dataFromChild", dataFromChild);
    this.props.checkAuthentication(true);
  }

  render() {
    return (
        <AppBar className="navBar"
            iconElementLeft={<img className="logoImg" src="../../images/logo.png" alt="logo"></img>}
            iconElementRight={
                this.props.isAuthenticated ? 
                <div className="row"><div className="NavBtnRight"><Demo /> <Demo /> </div><Logged /></div> : (<div><Login /><Login /><Login /></div>)}
        />
    );
  }
}
