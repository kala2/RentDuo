import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { browserHistory } from 'react-router';

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

    isValid() {
      const { errors, isValid } = validateInput(this.state);

      if (!isValid) {
        this.setState({ errors });
      }
      return isValid;
    }

    handleSubmit(event) {
      event.preventDefault();
      if (this.isValid()) {
        this.setState({ errors: {} , isLoading: true });
        console.log(this.state);
        this.props.userSignupRequest(this.state).then(
          () => {
            this.props.addFlashMessage({
              type: 'success',
              text: 'You have signed Up successfully.'
            });
            this.context.router.push('/');
          },
          ({ data }) => this.setState({ errors: data, isLoading: false  })
        );
      }
    }

    render() {
      const { errors } =this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>This is a form</h1>

          <TextFieldGroup
            error={errors.username}
            label="username"
            onChange={this.handleChange}
            value={this.state.username}
            field="username"
          />

          <TextFieldGroup
            error={errors.email}
            label="email"
            onChange={this.handleChange}
            value={this.state.email}
            field="email"
          />

          <TextFieldGroup
            error={errors.password}
            label="password"
            onChange={this.handleChange}
            value={this.state.password}
            field="password"
          />

          <TextFieldGroup
            error={errors.passwordConfirmation}
            label="passwordConfirmation"
            onChange={this.handleChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
          />

          <div className="form-group">
                <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign up
                </button>
          </div>
        </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default SignupForm;
