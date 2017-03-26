import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>This is a form</h1>
          <div className="form-group">
                <label className="control-label">Username</label>
                <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div className="form-group">
                <label className="control-label">Email</label>
                <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
          </div>
          <div className="form-group">
                <label className="control-label">Password</label>
                <input type="text" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />
          </div>
          <div className="form-group">
                <label className="control-label">Passwrod Confirmation</label>
                <input type="text" name="passwordConfirmation" className="form-control" value={this.state.passwordConfirmation} onChange={this.handleChange} />
          </div>
          <div className="form-group">
                <button className="btn btn-primary btn-lg">Sign up
                </button>
          </div>
        </form>
    );
  }
}

export default SignupForm;
