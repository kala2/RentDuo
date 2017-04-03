import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

function validateInput(data) {
  let errors ={};

  if (Validator.isEmpty﻿(data.id)) {
    errors.id = 'This field is required';
  }

  if (Validator.isEmpty﻿(data.password)) {
    errors.password = 'This field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

class LoginForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        id: '',
        password: '',
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
        this.props.login(this.state).then(
          (res) => this.context.router.push('/'),
          (err) => this.setState({ errors: err.response.data.errors, isLoading: false  })
        );
      }
    }

    render() {
      const { errors, id, password, isLoading } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <h1 className="text-center">Login</h1>

          { errors.form && <div className="alert alert-danger">{errors.form}</div> }

          <TextFieldGroup
            error={errors.id}
            placeholder="Username / Email"
            onChange={this.handleChange}
            value={id}
            field="id"
          />

          <TextFieldGroup
            error={errors.password}
            placeholder="password"
            onChange={this.handleChange}
            value={password}
            field="password"
            type="password"
          />

          <div className="form-group">
                <button disabled={isLoading} className="btn btn-primary btn-md btn-block">Login</button>
          </div>
        </form>
    );
  }
}

LoginForm.propTypes = {
  login: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
