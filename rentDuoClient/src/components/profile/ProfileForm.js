import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  let errors ={};

  if (Validator.isEmpty﻿(data.firstname)) {
    errors.firstname = 'First Name is required';
  }

  if (Validator.isEmpty﻿(data.lastname)) {
    errors.lastname = 'Last Name is required';
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
        firstname: '',
        lastname: '',
        password: '',
        passwordConfirmation: '',
        errors: {},
        isLoading: false,
        invalid: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.checkUserExists = this.checkUserExists.bind(this);
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

    checkUserExists(event) {
      const field = event.target.name;
      const value = event.target.value;

      if (value !== '' ) {
        this.props.isUserExists(value).then(res => {
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

    handleSubmit(event) {
      event.preventDefault();
      if (this.isValid()) {
        this.setState({ errors: {} , isLoading: true });
        const value = this.props.user.id;
        this.props.profileUpdateRequest(this.state, value).then(
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
        <div className="container">
          <h1 className="page-header">Profile {this.props.user.username}</h1>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="text-center">
                <img src="https://www.kontena.io/images/default-user-image.png" className="avatar img-circle img-thumbnail" alt="avatar" />
                <h6>Upload a different photo...</h6>
                <input type="file" className="text-center center-block well well-sm" />
              </div>
            </div>
            <div className="col-md-8 col-sm-6 col-xs-12 personal-info">
              {
                // <div className="alert alert-info alert-dismissable">
                //   <a className="panel-close close" data-dismiss="alert">×</a>
                //   <i className="fa fa-coffee"></i>
                //   This is an <strong>.alert</strong>. Use this to show important messages to the user.
                // </div>
              }
              <h3>Personal info<hr/></h3>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <span className="label label-primary">{this.props.user.firstname}</span>
                    <TextFieldGroup
                      error={errors.firstname}
                      placeholder="Firstname"
                      onChange={this.handleChange}
                      value={this.state.firstname}
                      field="firstname"
                    />
                </div>
                <div className="form-group">
                  <span className="label label-primary">{this.props.user.lastname}</span>
                    <TextFieldGroup
                      error={errors.lastname}
                      placeholder="Lastname"
                      onChange={this.handleChange}
                      value={this.state.lastname}
                      field="lastname"
                    />
                </div>
                <div className="form-group">
                  <span className="label label-primary">{this.props.user.username}</span>
                    <TextFieldGroup
                      error={errors.username}
                      placeholder="Username"
                      onChange={this.handleChange}
                      value={this.props.user.username}
                      field="username"
                      disabled
                    />
                </div>
                <div className="form-group">
                  <span className="label label-primary">Email</span>
                    <TextFieldGroup
                      error={errors.email}
                      placeholder="Email"
                      onChange={this.handleChange}
                      checkUserExists={this.checkUserExists}
                      value={this.props.user.email}
                      field="email"
                      disabled
                    />
                </div>
                <div className="form-group">
                  <span className="label label-primary">{this.props.user.password}</span>
                    <TextFieldGroup
                      error={errors.password}
                      placeholder="Password"
                      onChange={this.handleChange}
                      value={this.props.user.password}
                      field="password"
                    />
                </div>
                <div className="form-group">
                    <TextFieldGroup
                      error={errors.passwordConfirmation}
                      placeholder="Password Confirmation"
                      onChange={this.handleChange}
                      value={this.state.passwordConfirmation}
                      field="passwordConfirmation"
                    />
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label"></label>
                  <div className="col-md-8">
                    <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-md btn-block">Update
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

ProfileForm.propTypes = {
  profileUpdateRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

ProfileForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default ProfileForm;
