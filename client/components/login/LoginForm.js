import React from 'react';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/login';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions';
import TextFieldGroup from '../common/TextFieldGroup';
import { browserHistory } from 'react-router';

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
        console.log(this.state);
        this.props.login(this.state).then(
          (res) => this.context.router.push('/'),
          (err) => this.setState({ errors: err.data.errors, isLoading: false  })
        );
      }
    }

    render() {
      const { errors, id, password, isLoading } =this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>This is a login form</h1>

          { errors.form && <div className="alert alert-danger">{errors.form}</div> }

          <TextFieldGroup
            error={errors.id}
            label="username / email"
            onChange={this.handleChange}
            value={id}
            field="id"
          />

          <TextFieldGroup
            error={errors.password}
            label="password"
            onChange={this.handleChange}
            value={password}
            field="password"
            type="password"
          />

          <div className="form-group">
                <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Login</button>
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
