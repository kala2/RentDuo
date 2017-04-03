import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';


class EventForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        title: '',
        errors: {},
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
      this.props.createEvent(this.state);
    }

    render() {
      const { title, errors, isLoading } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <h1>Create New Event</h1>

          <TextFieldGroup
            name="title"
            placeholder="Event Title"
            field="title"
            value={title}
            onChange={this.handleChange}
            error={errors.title}
          />

          <div className="form-group">
                <button type="submit" disabled={isLoading} className="btn btn-primary">Create</button>
          </div>
        </form>
    );
  }
}

EventForm.propTypes = {
  createEvent: React.PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);
