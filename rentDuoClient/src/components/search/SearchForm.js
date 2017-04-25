import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import vehicles from '../../data/vehicles';
import map from 'lodash/map';

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
            this.context.router.push('/');
          },
          (err) => this.setState({ errors: err.response.data, isLoading: false  })
        );
    }

    render() {
      const options = map(vehicles,(val, key) =>
          <option value={val} key={val}>{key}</option>
      );
      return (
          <form className="form-group" onSubmit={this.handleSubmit}>
            <div className="row">
            <div className="input-group">
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
                  value={this.state.checkIn}
                  field="checkIn"
                  placeholder="Check In"
                  type="date"
                />
              </div>
              <div className="col-md-2">
                <TextFieldGroup
                  onChange={this.handleChange}
                  value={this.state.checkOut}
                  field="checkOut"
                  placeholder="Check Out"
                  type="date"
                />
              </div>
              <div className="col-md-2">
                <TextFieldGroup
                  onChange={this.handleChange}
                  value={this.state.travelers}
                  field="travelers"
                  placeholder="Travelers"
                  type="number"
                  min="1"
                />
              </div>
              <div className="col-md-2">
                <select
                  onChange={this.handleChange}
                  value={this.state.vehicles}
                  className="form-control"
                >
                {options}
                </select>
              </div>
              <div className="col-md-2">
                <button disabled={this.state.isLoading} className="btn btn-primary btn-md btn-block">Search</button>
              </div>
            </div>
            </div>
        </form>
    );
  }
}

SearchForm.propTypes = {
  searchRequest: React.PropTypes.func.isRequired
}

export default SearchForm;
