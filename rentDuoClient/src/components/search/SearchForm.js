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
        this.setState({ errors: {} , isLoading: true });
        console.log(this.state);
        this.props.searchRequest(this.state).then(
          () => {
            this.props.addFlashMessage({
              type: 'success',
              text: 'You have signed Up successfully.'
            });
            this.context.router.push('/');
          },
          (err) => this.setState({ errors: err.response.data, isLoading: false  })
        );
    }

    render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-md-2">
                <TextFieldGroup
                  onChange={this.handleChange}
                  value={this.state.location}
                  field="location"
                  placeholder="Location"
                />
              </div>
              <div className="col-md-2">
                <TextFieldGroup
                  onChange={this.handleChange}
                  value={this.state.vehicle}
                  field="vehicle"
                  placeholder="Vehicle"
                />
              </div>
              <div className="col-md-2">
                <TextFieldGroup
                  onChange={this.handleChange}
                  value={this.state.checkIn}
                  field="checkIn"
                  placeholder="Check In"
                />
              </div>
              <div className="col-md-2">
                <TextFieldGroup
                  onChange={this.handleChange}
                  value={this.state.checkOut}
                  field="checkOut"
                  placeholder="Check Out"
                />
              </div>
              <div className="col-md-2">
                <TextFieldGroup
                  onChange={this.handleChange}
                  value={this.state.travelers}
                  field="travelers"
                  placeholder="Travelers"
                />
              </div>
            </div>
            <button disabled={this.state.isLoading} className="btn btn-primary btn-md">Search
              </button>
        </form>
    );
  }
}

SearchForm.propTypes = {
  searchRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default SearchForm;
