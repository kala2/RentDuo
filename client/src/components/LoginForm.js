import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Redirect } from 'react-router';
import * as utils from './Utilities.js';

export default class LoginForm extends Component {

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
    utils.postLogin(this.state.content).then((result) => {
        if(result.status === 202) {
            localStorage.setItem('token', result.token);
            this.props.checkAuthentication(true);
        }
    });
  }

  render() {
        return (
            <div>
                {this.props.isAuthenticated ? <Redirect to={{pathname: '/'}} /> : (
                       <div>
                            <h2>This is a login form</h2>
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
                                    onChange={this.handleChange.bind(this, "password")}
                                    type="password"
                                    value={this.state.password}
                                    floatingLabelText="Password"
                                    floatingLabelFixed={true}
                                />
                                <br/>
                                <RaisedButton label="Submit" primary={true} type="submit" />
                            </form>
                        </div>
                    )
                }
               
            </div>
            
        );
    }
}
