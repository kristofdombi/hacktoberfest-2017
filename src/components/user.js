import React from 'react';
import PropTypes from 'prop-types';
import { Card, StyledLink, Avatar, DetailWrapper } from './styled/styled-elements';
import Overdrive from 'react-overdrive';

export const User = (props) => (
  <StyledLink to={ props.to }>
    <Overdrive id={ `${props.name}-card` }>
      <Card>
        <Avatar src={ props.avatar } />
        <DetailWrapper>
          <h3>{ props.name }</h3>
          <p>{ props.description }</p>
        </DetailWrapper>
      </Card>
    </Overdrive>
  </StyledLink>
);

User.displayName = 'User';

User.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  avatar: PropTypes.string,
};
