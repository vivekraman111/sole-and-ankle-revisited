/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import { WEIGHTS, COLORS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <MenuWrapper isOpen={isOpen} onDismiss={onDismiss}>
      <MenuContent ariaLabel={"Menu"} style={{
        '--color-gray-100': COLORS.gray[100],
        '--color-gray-900': COLORS.gray[900],
        '--color-gray-500': COLORS.gray[500],
        '--color-gray-700': COLORS.gray[700],
        '--color-white': COLORS.white,
        '--color-secondary': COLORS.secondary,
        '--font-weight-medium': WEIGHTS.medium,
        '--font-weight-normal': WEIGHTS.normal,
      }}>
        <ButtonWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={2} size={24} />
            <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          </CloseButton>
        </ButtonWrapper>
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

const ButtonWrapper = styled.div`
  flex: 1;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
  background: transparent;
  border: none;
  width: 48px;
  height: 48px;
  cursor: pointer;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const MenuWrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuContent = styled(DialogContent)`
  background: var(--color-white);
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 4px;
  padding-left: 16px;
  padding-bottom: 16px;
  overflow: auto;

  nav, footer{
    display: flex;
    flex-direction: column;

    a{
      padding: 4px 8px;
      text-decoration: none;

      &:hover{
        background: var(--color-gray-100)};
      }
    }
  }

  nav{
    font-weight: var(--font-weight-medium);

    a{
      color: var(--color-gray-900);
      font-size: ${18/16}rem;

      &:first-of-type {
        color: var(--color-secondary);
      }
    }
  }

  footer{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    a{
      color: var(--color-gray-700);
      font-size: ${14/16}rem;
      font-weight: var(--font-weight-normal);
    }
  }
`;

export default MobileMenu;
