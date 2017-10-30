import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { media } from '../../utils/media';

// Other components

export const UsersWrapper = styled.div`
  ${media.desktop`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `};
`;

/* Layout */

export const Wrapper = styled.main`
  margin: 0 auto;
  max-width: 960px;
  padding: 30px 20px 150px;

  @media (max-width: 959px) {
    padding: 0 40px 60px;
  }
`;

export const Header = styled.header`
  min-height: 500px;
  background-color: #2196F3;
  display: flex;
  align-items: center;
`;

export const HeaderText = styled.h1`
  max-width: 960px;
  margin: 0 auto;
  color: #fff;
`;

export const SectionTitle = styled.h2`
  color: #0D47A1;
`;

export const Footer = styled.footer`
  background-color: #1565C0;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterText = styled.p`
  color: #fff;
  text-align: center;
  font-size: 12px;
`;


// User card

export const StyledLink = styled(Link)`
  display: block;
  color: black;
  text-decoration: none;

  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.desktop`
    flex-basis: calc((100% - 30px) / 2);

    &:nth-child(odd) {
      margin-right: 30px;
    }
  `};
`;

export const Card = styled.div`
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 5px 20px 0 rgba(33, 150, 243, 0.3);
  padding: 15px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${media.mobile`
    flex-direction: column;
  `};

  &:hover {
    transform: scale(1.05);
  }
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 100%;
  margin: 0;
  ${media.mobile`
    margin: 0 auto 20px;
    width: 75px;
    height: 75px;
  `};
`;

export const DetailWrapper = styled.div`
  margin-left: 25px;
  ${media.mobile`
    margin: 0 auto;
    text-align: center;
  `};
`;
