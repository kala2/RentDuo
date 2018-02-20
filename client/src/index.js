import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Row, Col } from 'react-flexbox-grid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './views/Login.js';
import Home from './views/Home.js';
import Footer from './views/Footer.js';
import Register from './views/Register.js';
// import CartoonsDirectory from './views/CartoonsDirectory.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  constructor() {
      super();
      this.state = {
        isAuthenticated: false
      }
  }

  componentDidMount() {  
    const token = localStorage.getItem('token');
    if (token && token.length > 10) {
        this.setState({isAuthenticated: true});
    } else {
        this.setState({isAuthenticated: false});
    }   
  }

  checkAuthentication = (dataFromChild) => {
    this.setState({isAuthenticated: dataFromChild});
  }

  render() {
    return (
      <div>
          <MuiThemeProvider>
            <Router>
              <Row around='xs'>
                <Col xs={12} md={12}>
                  <Route exact path="/" component={() => (<Login isAuthenticated={this.state.isAuthenticated} checkAuthentication={this.checkAuthentication} />)} />
                  <Route exact path="/home" component={() => (<Home isAuthenticated={this.state.isAuthenticated} checkAuthentication={this.checkAuthentication} />)} />
                  <Route exact path="/register" component={() => (<Register />)} />
                  {/* <Route exact path="/app" component={() => (<CartoonsDirectory isAuthenticated={this.state.isAuthenticated} />)} /> */}
                </Col>
              </Row>
            </Router>
          </MuiThemeProvider>
          <Footer />
         
      </div>
    
    );

  }
    
}

ReactDOM.render(<App />, document.getElementById('root'));



