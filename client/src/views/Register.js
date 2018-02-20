import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RegisterForm from '../components/RegisterForm';
import NavBar from './NavBar.js';
import { StickyContainer, Sticky } from 'react-sticky';
import { CSSTransitionGroup } from 'react-transition-group';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

export default class Register extends Component {

  checkAuthentication = (dataFromChild) => {
    console.log("the login.js dataFromChild", dataFromChild);
    this.props.checkAuthentication(true);
  }

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
                <Paper style={styles.paper}>
                  <RegisterForm isAuthenticated={this.props.isAuthenticated} checkAuthentication={this.checkAuthentication} />
                </Paper>
                <CSSTransitionGroup

                        className="example"
                          transitionName="example"
                          transitionAppear={true}
                          transitionAppearTimeout={500}
                          transitionEnter={false}
                          transitionLeave={false}>
                          <h1>Fading at Initial Mount</h1>
                        </CSSTransitionGroup>
                  
                </StickyContainer>
        </div>
      </div>

    );
  }
}
