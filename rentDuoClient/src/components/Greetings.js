import React from 'react';
import InlineCss from "react-inline-css";
import SearchForm from "./search/SearchForm"
import FlashMessagesList from './flash/FlashMessagesList';

class Greetings extends React.Component {
    render() {
      return (
        <InlineCss stylesheet={`
                #brand {
                    color: #BF1829;
                }
                `}>

          <div>
            <br/><br/>
            <div className="container">
              <div className="pull-left">
                <h1><p id="brand">RentDuo</p>Find the perfect vehicle for your journey.</h1>
                <br/><br/>
                <SearchForm />
                <FlashMessagesList />
                {this.props.children}                
              </div>
            </div>
          </div>
        </InlineCss>
    );
  }
}

export default Greetings;
