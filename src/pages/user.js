import React from 'react';
import { Route } from 'react-router-dom';
import UserDetails from '../components/user-details';

const User = () => (
  <Route
    render={ ({ location }) => (
      <Route
        location={ location }
        key={ location.key }
        path="/user/:id"
        component={ UserDetails }
      />
    ) }
  />
);

User.displayName = 'User';

export default User;
