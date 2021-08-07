import P from 'prop-types';
import { Container, Html } from './style';
import React from 'react';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Container>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>
        <Html>
          <TextComponent>{html}</TextComponent>
        </Html>
      </Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  srcImg: P.string.isRequired,
};