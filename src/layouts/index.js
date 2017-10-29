import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  Header,
  HeaderText,
  Wrapper,
  Footer,
  FooterText } from '../components/styled/styled-elements';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Hackathon | Hacktoberfest 2017"
      meta={ [
        { name: 'description', content: 'Gatsby Hackathon for Hacktoberfest 2017' },
        { name: 'keywords', content: 'gatsby, hackathon, hacktoberfest' },
      ] }
    />
    <Header>
      <HeaderText>HELLO DREAM TEAM</HeaderText>
    </Header>
    <Wrapper>{children()}</Wrapper>
    <Footer>
      <FooterText>Made with <br />❤️ <br />by Kristof Dombi</FooterText>
    </Footer>
  </div>
);

TemplateWrapper.displayName = 'TemplateWrapper';

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
