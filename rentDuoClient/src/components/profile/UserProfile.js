import React from 'react';

export default function UserProfile({ user }) {

  const userProfile = (
    <div className="row">
      {user.username} {user.email}
    </div>
  );

  return (
    <div>
      {userProfile}
    </div>
  );
}
