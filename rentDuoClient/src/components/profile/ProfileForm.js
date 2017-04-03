import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  let errors ={};

  if (Validator.isEmpty﻿(data.username)) {
    errors.username = 'Username is required';
  }

  if (Validator.isEmpty﻿(data.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is incorrect';
  }

  if (Validator.isEmpty﻿(data.password)) {
    errors.password = 'Password is required';
  }

  if (Validator.isEmpty﻿(data.passwordConfirmation)) {
    errors.passwordConfirmation = 'Password Confirmation is required';
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.passwordConfirmation = 'passwords are not the same';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

class ProfileForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        errors: {},
        isLoading: false,
        invalid: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.checkUserExists = this.checkUserExists.bind(this);
      this.getUserDetails = this.getUserDetails.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    checkUserExists(event) {
      const field = event.target.name;
      const value = event.target.value;

      if (value !== '' ) {
        this.props.profileUpdateRequest(value).then(res => {
            let errors = this.state.errors;
            let invalid;
            if (res.data.user) {
               errors[field] = 'there is user with this ' + field;
               invalid = true;
            } else {
              errors[field] = '';
              invalid = false;
            }
            this.setState({ errors, invalid });
        });
      }
    }

    getUserDetails(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.props.getUser(value).then(res => {
            let errors = this.state.errors;
            let invalid;
            if (res.data.user) {
               errors[field] = 'there is user with this ' + field;
               invalid = true;
            } else {
              errors[field] = '';
              invalid = false;
            }
            this.setState({ errors, invalid });
        });
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
        this.props.profileUpdateRequest(this.state).then(
          () => {
            this.props.addFlashMessage({
              type: 'success',
              text: 'You have Updated successfully.'
            });
            this.context.router.push('/profile');
          },
          (err) => this.setState({ errors: err.response.data, isLoading: false  })
        );
      }
    }

    render() {
      const { errors } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <h1 className="text-center">Profile Update</h1>

          <TextFieldGroup
            error={errors.username}
            placeholder="Username"
            onChange={this.handleChange}
            checkUserExists={this.checkUserExists}
            value={this.state.username}
            field="username"
          />
          <TextFieldGroup
            error={errors.email}
            placeholder="Email"
            onChange={this.handleChange}
            checkUserExists={this.checkUserExists}
            value={this.state.email}
            field="email"
          />
          <TextFieldGroup
            error={errors.password}
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
            field="password"
          />
          <TextFieldGroup
            error={errors.passwordConfirmation}
            placeholder="Password Confirmation"
            onChange={this.handleChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
          />
          <div className="form-group">
                <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-md btn-block">Sign up
                </button>
          </div>
        </form>
    );
  }
}

ProfileForm.propTypes = {
  profileUpdateRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  getUser: React.PropTypes.func.isRequired
}

ProfileForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ProfileForm;
