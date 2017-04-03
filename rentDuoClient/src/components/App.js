import React from 'react';
import NavigationBar from './NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';
import InlineCss from "react-inline-css";

class App extends React.Component {
    render() {
      return (
        <InlineCss stylesheet={`
                & .container-fluid {
                    margin-top: 5px;
                }
                `}>
        <div className="container-fluid">
          <NavigationBar />
          <br/>
          <FlashMessagesList />
          {this.props.children}
        </div>
      </InlineCss>
    );
  }
}

export default App;
