import React from 'react';

import {
  Navbar,
  NavButton,
  LogoPlace,
  Headline,
  Separator,
  RightPanel,
} from '@components/styled/Navbar';

import logoImage from '@public/logoWhiteBadge.svg';

export default function Header() {
  return (
    <header>
      <Navbar>
        <LogoPlace src={logoImage} className="App-logo" alt="logo" height={60} width={60} />
        <Headline>ElectronicX</Headline>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/about">About</NavButton>
        <RightPanel>
          <Separator />
          <NavButton to="/login">Login</NavButton>
        </RightPanel>
      </Navbar>
    </header>
  );
}
