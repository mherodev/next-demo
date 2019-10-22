import React from 'react';
import Styled from './Header.Styled';
import { Link } from '../../routes';

import HomeIconSvg from './home.svg';
import AboutIconSvg from './about.svg';

const Header = () => (
  <Styled.DivHeader>
    <span>Header</span>
    <Link route="home" passHref>
      <Styled.ALink>
        <HomeIconSvg />
        Home
      </Styled.ALink>
    </Link>
    <Link route="about" passHref>
      <Styled.ALink>
        <AboutIconSvg />
        About
      </Styled.ALink>
    </Link>
  </Styled.DivHeader>
);

export default Header;
