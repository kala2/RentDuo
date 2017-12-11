import React from 'react';
import Paper from 'material-ui/Paper';
import { Redirect } from 'react-router';

const styles = {
  paper: {
    minHeight: '100px',
    padding: '40px'
  }
};

export default class CartoonsDirectory extends React.Component {

  constructor() {
    super();
    this.state = {
      isAuthenticated: false
    }
  }

  render() {
    console.log("the props cartoon is: ", this.props.isAuthenticated);
    return (
      <div>
        {!this.props.isAuthenticated ? <Redirect to={{pathname: '/'}} /> : (
          <Paper style={styles.paper}>
            <h2>This is Cartoons Directory</h2>
          </Paper>
        )}
      </div>
    );
  }
}
