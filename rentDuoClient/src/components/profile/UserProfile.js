import React from 'react';

export default function UserProfile({ user }) {

  const userProfile = (
    <div className="row">
      <h1 className="text-center">Profile {user.username} - {user.email}</h1>
    </div>
  );

  return (
    <div>
      {userProfile}
    </div>
  );
}
