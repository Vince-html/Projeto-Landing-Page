import P from 'prop-types';
import { Container } from './style';
import React from 'react';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ footerHtml }) => {
  return (
    <Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Container>
  );
};

Footer.propTypes = {
  footerHtml: P.string.isRequired,
};
