import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';
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
