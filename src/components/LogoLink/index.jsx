import P from 'prop-types';
import { Container } from './style';
import React from 'react';
import { Heading } from '../Heading';

export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <>
      <Heading size="small" uppercase>
        <Container href={link}>
          {srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
        </Container>
      </Heading>
    </>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
