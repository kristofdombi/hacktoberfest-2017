import React from 'react';
import { Route } from 'react-router-dom';
import UserDetails from '../components/user-details';

const User = () => (
  <div>
    <Route
      render={ ({ location }) => (
        <div>
          <Route
            location={ location }
            key={ location.key }
            path="/user/:id"
            component={ UserDetails }
          />
        </div>
      ) }
    />
  </div>
);

User.displayName = 'User';

export default User;
