import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as utils from './Utilities.js';

export default class RegisterForm extends Component {

  constructor() {
      super();
      this.state = {
        content: {},
        message: '',
        isAuthenticated: ''
      }
  }

  handleChange(propertyName, event) {
    event.preventDefault();
    const content = this.state.content;
    content[propertyName] = event.target.value;
    this.setState({ content: content });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.content.password === this.state.content.passwordConfirm) {
        console.log("FORM is: ", this.state.content);
        utils.postRegister(this.state.content);
        // .then((result) => {
        //     if(result.status === 201) {
        //         localStorage.setItem('token', result.body.token);
        //         this.props.checkAuthentication(true);
        //     }
        // });
    } else {
        console.log("error");
    }    
  }

  render() {
        return (
            <div>
                <h2>This is a Register form</h2>
                {/* {!(this.state.message === '') ? <div>{this.state.message}</div> : null} */}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <TextField
                        value={this.state.username}
                        type="text"
                        onChange={this.handleChange.bind(this, "username")}
                        floatingLabelText="Username"
                        floatingLabelFixed={true}
                    /><br/>
                    <TextField
                        value={this.state.email}
                        type="text"
                        onChange={this.handleChange.bind(this, "email")}
                        floatingLabelText="Email"
                        floatingLabelFixed={true}
                    /><br/>
                    <TextField
                        onChange={this.handleChange.bind(this, "password")}
                        type="password"
                        value={this.state.password}
                        floatingLabelText="Password"
                        floatingLabelFixed={true}
                    />
                    <br/>
                    <TextField
                        onChange={this.handleChange.bind(this, "passwordConfirm")}
                        type="password"
                        value={this.state.password}
                        floatingLabelText="Password Confirm"
                        floatingLabelFixed={true}
                    />
                    <br/>
                    <RaisedButton label="Submit" primary={true} type="submit" />
                </form>
            </div>
        );
                    
    }
}
