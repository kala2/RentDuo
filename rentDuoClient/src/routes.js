import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import NewEventPage from './components/events/NewEventPage';
import ProfilePage from './components/profile/ProfilePage';
import requireAuth from './utils/requireAuth';
import Greetings from './components/Greetings'

export default (
      <Route path="/" component={App}>
            <IndexRoute component={Greetings} />
          <Route path="signup" component={SignupPage} />
          <Route path="login" component={LoginPage} />
          <Route path="new-event" component={requireAuth(NewEventPage)} />
          <Route path="profile" component={requireAuth(ProfilePage)} />
      </Route>
)
