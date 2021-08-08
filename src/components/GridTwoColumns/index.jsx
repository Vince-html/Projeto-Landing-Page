import P from 'prop-types';
import { Container, TextContainer, ImgContainer, Image } from './style';
import React from 'react';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from './../TextComponent/index';

export const GridTwoColumns = ({ title, text, background = false, srcImg }) => {
  return (
    <SectionBackground background={background}>
      <Container background={background}>
        <TextContainer>
          <Heading uppercase colorDark={!background} as="h2">
            {title}
          </Heading>
          <TextComponent> {text}</TextComponent>
        </TextContainer>
        <ImgContainer>
          <Image src={srcImg} alt={title}></Image>
        </ImgContainer>
      </Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  background: P.bool,
  srcImg: P.string.isRequired,
};
