import React from 'react';
import PropTypes from 'prop-types';
import { getUsers } from '../utils/getUsers';
import styled from 'styled-components';
import { Card, Avatar, DetailWrapper } from './styled/styled-elements';

const DetailedCard = Card.extend`
  cursor: auto;
  margin: 60px auto;
  flex-direction: column;

  &:hover {
    transform: none;
  }
`;

const DetailedAvatar = Avatar.extend`
  margin: 0 auto;
`;

const DetailedName = styled.h3`
  text-align: center;
  display: block;
  margin-top: 30px;
`;

const DetailedWrapper = DetailWrapper.extend`
  margin: 20px auto 20px;
  text-align: center;
`;

export default class UserDetails extends React.Component {
  static displayName = 'UserDetails';

  static propTypes = {
    match: PropTypes.object
  }

  state = {
    currentUser: {}
  }

  componentDidMount() {
    getUsers(this.props.match.params)
      .then(user => this.setState({
        currentUser: user[0]})
      );
  }

  render() {
    const {name, description, avatar, email, phone} = (this.state.currentUser && this.state.currentUser);
    return (
      <div>{
        !this.state.currentUser
          ? (<p>Loading...</p>)
          : (
            <DetailedCard>
              <DetailedAvatar src={ avatar } />
              <DetailedWrapper>
                <DetailedName>{ name }</DetailedName>
                <p>{ description }</p>
              </DetailedWrapper>
              <DetailedWrapper>
                <h4>Email:</h4>
                <a href={ `mailto:${email}` }>{ email }</a>
              </DetailedWrapper>
              <DetailedWrapper>
                <h4>Phone:</h4>
                <p>{ phone }</p>
              </DetailedWrapper>
            </DetailedCard>
          )
      }</div>
    );
  }
}
