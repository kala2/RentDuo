import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {
    logout(event) {
      event.preventDefault();
      this.props.logout();
    }
    render() {
      const { isAuthenticated } = this.props.auth;

      const userLinks = (
        <div className="pull-right">
                <a href="#" onClick={this.logout.bind(this)}>Logout</a>
        </div>
      );

      const guestLinks = (
        <div className="pull-right">
                <Link to="/signup" className="navbar-brand">Sign up</Link>
                <Link to="/login" className="navbar-brand">Login</Link>
        </div>
      );
      return (
          <div className="container-fluid">
            <div className="row">
               <a href={`/`}><img src={require('./icons/rentDuo.png')} alt="" height="90" /></a>
                { isAuthenticated ? userLinks: guestLinks }
            </div>
          </div>
      );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
