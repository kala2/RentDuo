import React from 'react';
import SearchForm from './SearchForm';
import { connect } from 'react-redux';
import { searchRequest } from '../../actions/searchActions';
import { addFlashMessage } from '../../actions/flashMessages';

class SearchPage extends React.Component {
    render() {
      const { searchRequest, addFlashMessage } = this.props;
      return (
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
              <SearchForm
                searchRequest={searchRequest}
                addFlashMessage={addFlashMessage}
               />
          </div>
        </div>
    );
  }
}

SearchPage.propTypes = {
  searchRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { searchRequest, addFlashMessage })(SearchPage);
