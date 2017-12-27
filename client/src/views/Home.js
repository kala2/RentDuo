import React, {Component} from 'react';
import CartoonsDirectory from './CartoonsDirectory.js';
import NavBar from './NavBar.js';
import SimpleSlider from './SimpleSlider.js';
import TextField from 'material-ui/TextField';
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
                <div id="container">
                  <div id="navi">
                    <SimpleSlider /></div>
                    <div id="infoi">
                      <div className="row searchBarRow">
                        <div id="infoi2">
                            <TextField
      hintText="Hint Text"
      hintStyle={{color: "#e4e4e4"}}
      floatingLabelText="Floating Label Text"
    />&emsp;

<TextField
      hintText="Hint Text"
      hintStyle={{color: "#e4e4e4"}}
      floatingLabelText="Floating Label Text"
    />&emsp;
                        </div>
                    </div>
                  </div>
                </div>
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