import React from 'react';
import styled from 'styled-components/macro';
import { COLORS } from '../../constants';

const Breadcrumbs = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Breadcrumbs.Crumb = ({ href, children, delegated }) => {
  return (
    <CrumbWrapper style={{
        '--color-gray-300': COLORS.gray[300],
        '--color-gray-900': COLORS.gray[900],
        '--color-gray-700': COLORS.gray[700],
      }}>
      <CrumbLink href={href} {...delegated}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const CrumbWrapper = styled.div`
  &:not(:first-of-type) {
    margin-left: 8px;

    &::before {
      content: '/';
      margin-right: 8px;
      color: var(--color-gray-300)};
    }
  }
`;

const CrumbLink = styled.a`
  color: var(--color-gray-700)};
  text-decoration: none;

  &:hover {
    color: var(--color-gray-900)};
  }
`;

const Wrapper = styled.nav`
  display: flex;
  font-size: 0.875rem;
`;
export default Breadcrumbs;
