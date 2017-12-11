import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import superagent from 'superagent';
import { Redirect } from 'react-router';

export default class LoginForm extends React.Component {

  constructor() {
      super();
      this.state = {
        content: {},
        message: ''
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
    superagent
        .post('/auth/v1')
        .send({
            username: this.state.content.username,
            password: this.state.content.password
        })
        .end((err, res) => {
            if (err) {
                this.setState({ message: "Authentication Failed" });
            } else {
                localStorage.setItem('token', res.body.token);
                this.setState({ message: "Authentication Successfull" });
            }
        })
  }

  render() {
        console.log("the props loginForm.js is: ", this.props.isAuthenticated);
        return (
            <div>
                {this.props.isAuthenticated ? <Redirect to={{pathname: '/app'}} /> : (
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
