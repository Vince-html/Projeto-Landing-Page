import P from 'prop-types';
import { Container, MenuContainer, Button } from './style';
import React, { useState } from 'react';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLink } from '../NavLink';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Button
        visible={visible}
        onClick={() => setVisible(true)}
        aria-label="Open/Close menu"
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Button>
      <Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <MenuContainer>
            <LogoLink {...logoData} />
            <NavLink links={links} />
          </MenuContainer>
        </SectionContainer>
      </Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
