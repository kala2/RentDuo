import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import LoginForm from '../components/LoginForm';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

export default class Login extends Component {

  checkAuthentication = (dataFromChild) => {
    console.log("the login.js dataFromChild", dataFromChild);
    this.props.checkAuthentication(true);
  }

  render() {
    return (
      <Paper style={styles.paper}>
        <h2>Login</h2>
        <LoginForm isAuthenticated={this.props.isAuthenticated} checkAuthentication={this.checkAuthentication} />
      </Paper>
    );
  }
}
