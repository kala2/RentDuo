import React from 'react';
import classnames from 'classnames';

class SignupForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        errors: {},
        isLoading: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({ errors: {} , isLoading: true });
      console.log(this.state);
      this.props.userSignupRequest(this.state).then(
        () => {},
        ({ data }) => this.setState({ errors: data, isLoading: false  })
      );
    }

    render() {
      const { errors } =this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>This is a form</h1>
          <div className={classnames("form-group", {'has-error': errors.username})}>
                <label className="control-label">Username</label>
                <input type="text" name="username" className="form-control" value={this.state.username} onChange={this.handleChange} />

                {errors.username && <span className="help-block">{errors.username}</span>}
          </div>
          <div className={classnames("form-group", {'has-error': errors.email})}>
                <label className="control-label">Email</label>
                <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />

                {errors.email && <span className="help-block">{errors.email}</span>}
          </div>
          <div className={classnames("form-group", {'has-error': errors.password})}>
                <label className="control-label">Password</label>
                <input type="text" name="password" className="form-control" value={this.state.password} onChange={this.handleChange} />

                {errors.password && <span className="help-block">{errors.password}</span>}
          </div>
          <div className={classnames("form-group", {'has-error': errors.passwordConfirmation})}>
                <label className="control-label">Passwrod Confirmation</label>
                <input type="text" name="passwordConfirmation" className="form-control" value={this.state.passwordConfirmation} onChange={this.handleChange} />

                {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
          </div>
          <div className="form-group">
                <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign up
                </button>
          </div>
        </form>
    );
  }
}

export default SignupForm;
