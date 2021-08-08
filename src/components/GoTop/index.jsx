import P from 'prop-types';
import { Container } from './style';
import React from 'react';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = ({ children }) => {
  return (
    <Container href="#" aria-label="Go to top" title="Home">
      <KeyboardArrowUp />
    </Container>
  );
};

GoTop.propTypes = {
  children: P.node,
};
