import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Redirect } from 'react-router';

const styles = {
  paper: {
    minHeight: '100%',
    padding: '40px'
  }
};

export default class CartoonsDirectory extends Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    }
  }

  render() {
    return (
      <div className="cartoon-directory">
        {!this.props.isAuthenticated ? <Redirect to={{pathname: '/'}} /> : (
          <Paper style={styles.paper}>
            <h2>This is Cartoons Directory</h2>
          </Paper>
        )}
      </div>
    );
  }
}
