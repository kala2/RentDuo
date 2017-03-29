import React from 'react';
import { Link } from 'react-router';

class NavigationBar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
                <Link to="/" className="navbar-brand">RentDuo</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/signup" className="navbar-brand">Sign up</Link></li>
                    <li><Link to="/login" className="navbar-brand">Login</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      );
  }
}

export default NavigationBar;
