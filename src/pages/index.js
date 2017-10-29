import React from 'react';
import Link from 'gatsby-link';
import { getUsers } from '../utils/getUsers';
import { User } from '../components/user';
import { SectionTitle, UsersWrapper } from '../components/styled/styled-elements';

class IndexPage extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    getUsers().then(results => this.setState({
      users: results
    }));
  }

  render() {
    return (
      <div>
        <SectionTitle>MEET THE TEAM</SectionTitle>
        { this.state.users.length === 0
          ? (<p>Loading...</p>)
          : <UsersWrapper>
            { this.state.users.map((user, i) => (
              <User
                to={ `/user/${i + 1}` }
                key={ i }
                avatar={ user.avatar }
                name={ user.name }
                description={ user.description }
              >
                hello
              </User>
            )) }
          </UsersWrapper>
        }
      </div>
    );
  }
}

export default IndexPage;
