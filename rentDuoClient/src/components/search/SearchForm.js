import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class SearchForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        location: '',
        vehicle: '',
        travelers: '',
        checkIn: '',
        checkOut: '',
        isLoading: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
      event.preventDefault();
      this.setState({ isLoading: true });
      this.props.searchRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Results'
          });
        },
        (err) => this.setState({ isLoading: false  })
      );
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>This is a search form</h1>

          <TextFieldGroup
            label="location"
            onChange={this.handleChange}
            value={this.state.location}
            field="location"
          />

          <TextFieldGroup
            label="vehicle"
            onChange={this.handleChange}
            value={this.state.vehicle}
            field="vehicle"
          />

          <TextFieldGroup
            label="checkIn"
            onChange={this.handleChange}
            value={this.state.checkIn}
            field="checkIn"
          />

          <TextFieldGroup
            label="checkOut"
            onChange={this.handleChange}
            value={this.state.checkOut}
            field="checkOut"
          />

          <TextFieldGroup
            label="travelers"
            onChange={this.handleChange}
            value={this.state.travelers}
            field="travelers"
          />

          <div className="form-group">
                <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Search
                </button>
          </div>
        </form>
    );
  }
}

SearchForm.propTypes = {
  searchRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default SearchForm;
