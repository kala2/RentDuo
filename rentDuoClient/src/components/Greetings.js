import React from 'react';
import InlineCss from "react-inline-css";
import SearchForm from "./search/SearchForm"
import { searchRequest } from '../actions/searchActions';

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
              <div className="row">
                <div className="pull-left">
                  <h1><p id="brand">RentDuo</p>Find the perfect vehicle for your journey.</h1>
                  <br/><br/>
                </div>
              </div>
              <div className="row">
                <SearchForm
                  searchRequest={searchRequest}
                 />
                {this.props.children}
              </div>
            </div>
          </div>
        </InlineCss>
    );
  }
}

export default Greetings;
