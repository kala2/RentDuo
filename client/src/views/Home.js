import React, {Component} from 'react';
import CartoonsDirectory from './CartoonsDirectory.js';
import NavBar from './NavBar.js';

class Home extends Component {

  render() {
    return (
      <div>     
         <div className="forSticky">
     
            <NavBar isAuthenticated={this.props.isAuthenticated} />
            <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
         
         </div>
      </div>
    );
  }
}

export default Home;