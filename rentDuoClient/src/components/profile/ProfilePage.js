import React from 'react';
import ProfileForm from './ProfileForm';
import { connect } from 'react-redux';
import { profileUpdateRequest, getUser, isUserExists } from '../../actions/profileUpdateActions';
import { addFlashMessage } from '../../actions/flashMessages';

class ProfilePage extends React.Component {

    componentDidMount() {
      this.props.getUser();
    }

    render() {
      const { profileUpdateRequest, addFlashMessage, getUser, isUserExists } = this.props;
      return (
        <div className="row">
              <ProfileForm
                profileUpdateRequest={profileUpdateRequest}
                addFlashMessage={addFlashMessage}
                getUser={getUser}
                user={this.props.user}
                isUserExists={isUserExists}
               />
        </div>
    );
  }
}

ProfilePage.propTypes = {
  profileUpdateRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  getUser: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { profileUpdateRequest, addFlashMessage, getUser, isUserExists })(ProfilePage);
