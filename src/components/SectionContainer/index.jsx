import P from 'prop-types';
import { Container } from './style';
import React from 'react';

export const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
