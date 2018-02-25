import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

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
      isAuthenticated: true
    }
  }

  render() {
    return (
      <div className="cartoon-directory">
          <Paper style={styles.paper}>
            <h2>Demo content</h2>
          </Paper>
      </div>
    );
  }
}
