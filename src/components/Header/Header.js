import React from 'react';
import Styled from './Header.Styled';
import { Link } from '../../routes';

const Header = () => (
  <Styled.DivHeader>
    <span>Header</span>
    <Link route="home">
      <a>Home</a>
    </Link>
    <Link route="about">
      <a>About</a>
    </Link>
  </Styled.DivHeader>
);

export default Header;
