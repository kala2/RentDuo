import React, {Component} from 'react';
import CartoonsDirectory from './CartoonsDirectory.js';
import NavBar from './NavBar.js';
import SimpleSlider from './SimpleSlider.js';
import { StickyContainer, Sticky } from 'react-sticky';

class Home extends Component {

  render() {
    return (
      <div>     
         <div className="forSticky">
            
            <StickyContainer>
                <Sticky topOffset={250}>
                  {
                    ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                      return (
                        <div style={{ ...style}}>
                          <NavBar isAuthenticated={this.props.isAuthenticated} />
                        </div>
                        // <NavBar isAuthenticated={this.props.isAuthenticated} />
                      )
                    }
                  }
                </Sticky>
                <SimpleSlider />
                    <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
                    <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
                    <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
                    <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
                    <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
                    <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
                    <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
                    <CartoonsDirectory isAuthenticated={this.props.isAuthenticated} />
               
            </StickyContainer>
         </div>
      </div>
    );
  }
}

export default Home;