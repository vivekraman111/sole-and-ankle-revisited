import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';

import { QUERIES } from '../../constants';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader style={{
        '--color-gray-300': COLORS.gray[300],
        '--color-gray-900': COLORS.gray[900],
        '--color-secondary': COLORS.secondary,
        '--weight-medium': WEIGHTS.medium,
      }}>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} size={26} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} size={26} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
            <Icon id="menu" strokeWidth={2} size={26} />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300)};
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid var(--color-gray-900);
    justify-content: space-between;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(2.5rem, 16vw - 7rem, 6rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  gap: 48px;
  margin: 0px;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    &:nth-of-type(2){
      display: none;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
