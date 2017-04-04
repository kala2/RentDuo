import React from 'react';
import ProfileForm from './ProfileForm';
import { connect } from 'react-redux';
import { profileUpdateRequest, getUser } from '../../actions/profileUpdateActions';
import { addFlashMessage } from '../../actions/flashMessages';

class ProfilePage extends React.Component {

    componentDidMount() {
      this.props.getUser();
    }

    renderUser({email, username}){
      return (
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
              {email} {username}
          </div>
        </div>
      );
    }

    render() {
      const { profileUpdateRequest, addFlashMessage, getUser } = this.props;
      return (
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
              <ProfileForm
                profileUpdateRequest={profileUpdateRequest}
                addFlashMessage={addFlashMessage}
                getUser={getUser}
               />
          </div>
        </div>
    );
  }
}

ProfilePage.propTypes = {
  profileUpdateRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  getUser: React.PropTypes.func.isRequired
}

export default connect(null, { profileUpdateRequest, addFlashMessage, getUser })(ProfilePage);
