import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import './index.css';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px;

  @media (max-width: 959px) {
    padding: 0 20px;
  }
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Hackathon | Hacktoberfest 2017"
      meta={[
        { name: 'description', content: 'Gatsby Hackathon for Hacktoberfest 2017' },
        { name: 'keywords', content: 'gatsby, hackathon, hacktoberfest' },
      ]}
    />
    <Wrapper>{children()}</Wrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;
