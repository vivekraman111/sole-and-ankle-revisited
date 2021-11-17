/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MenuWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <MenuContent ariaLabel={"Menu"} style={{
        '--color-gray-300': COLORS.gray[300],
        '--color-gray-900': COLORS.gray[900],
        '--color-gray-500': COLORS.gray[500],
        '--color-white': COLORS.white,
      }}>
        <button onClick={onDismiss}>Dismiss menu</button>
        <nav>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </nav>
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </MenuContent>
    </MenuWrapper>
  );
};

const MenuWrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuContent = styled(DialogContent)`
  position: relative;
  background: var(--color-white);
  border-radius: 8px;
  width: 65%;
  display: flex;
  flex-direction: column;
  padding: 4px;

  nav, footer{
    display: flex;
    flex-direction: column;
    font-weight: bold;

    a{
      padding: 4px 8px;
      text-decoration: none;
      color: var(--color-gray-900);
      font-size: 1.25rem;

      &:hover{
        background: var(--color-gray-300)};
      }
    }
  }

  nav{
    border-bottom: 2px solid var(--color-gray-500);
  }

  footer{

  }
`;

export default MobileMenu;
