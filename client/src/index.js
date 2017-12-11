import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Row, Col} from 'react-flexbox-grid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './views/Login';
import CartoonsDirectory from './views/CartoonsDirectory';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends React.Component {
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

  render() {
    console.log("THE STATE ARE: ", this.state.isAuthenticated);
    return (
      <div>
          <MuiThemeProvider>
            <Router>
              <Row around='xs'>
                <Col xs={12} md={11}>
                  <Route exact path="/" component={() => (<Login isAuthenticated={this.state.isAuthenticated} />)} />
                  <Route exact path="/app" component={() => (<CartoonsDirectory isAuthenticated={this.state.isAuthenticated} />)} />
                </Col>
              </Row>
            </Router>
          </MuiThemeProvider>
      </div>
    
    );

  }
    
}

ReactDOM.render(<App />, document.getElementById('root'));



