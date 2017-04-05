import React from 'react';
import ProfileForm from './ProfileForm';
import { connect } from 'react-redux';
import { profileUpdateRequest, getUser } from '../../actions/profileUpdateActions';
import { addFlashMessage } from '../../actions/flashMessages';
import UserProfile from './UserProfile';


class ProfilePage extends React.Component {

    componentDidMount() {
      this.props.getUser();
    }

    render() {
      const { profileUpdateRequest, addFlashMessage, getUser } = this.props;
      return (
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
              <div className="row text-center">
                <UserProfile user={this.props.user} />
              </div>
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

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { profileUpdateRequest, addFlashMessage, getUser })(ProfilePage);
