import React from 'react';
import Paper from 'material-ui/Paper';
import LoginForm from '../components/LoginForm';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

export default class Login extends React.Component {

  render() {
    console.log("the login.js props are: ", this.props.isAuthenticated);
    return (
      <Paper style={styles.paper}>
        <h2>Login</h2>
        <LoginForm isAuthenticated={this.props.isAuthenticated} />
      </Paper>
    );
  }
}
