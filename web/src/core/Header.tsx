import React from 'react';

import {
  NavButton,
  LogoPlace,
  Headline,
  Separator,
} from '@components/styled/Navbar';

import logoImage from '@public/logoBadge.svg';

import { useCookies } from 'react-cookie';
import { Grid, Typography } from '@material-ui/core';

export default function Header() {
  const [{ token, username }, setCookie] = useCookies(['token']);
  const doLogout = () => {
    setCookie('token', '', { path: '/' });
  };

  return (
    <header>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>
          <LogoPlace src={logoImage} className="App-logo" alt="logo" height={60} width={60} />
        </Grid>
        <Grid item>
          <Headline>ElectronicX</Headline>
        </Grid>
        <Grid item>
          <NavButton to="/">Home</NavButton>
        </Grid>
        <Grid item>
          <NavButton to="/about">About</NavButton>
        </Grid>
        <Grid item>
          <NavButton to="/items">Items</NavButton>
        </Grid>
        <Grid item>
          <NavButton to="/categories">Categories</NavButton>
        </Grid>

        <Separator />
        {token
          ? (
            <>
              <Grid item>
                <Typography variant="caption">
                  Welcome
                  {' '}
                  {username}
                </Typography>
              </Grid>
              <Grid item>
                <NavButton to="/" onClick={doLogout}>Logout</NavButton>
              </Grid>
            </>
          )
          : (
            <>
              <Grid item>
                <NavButton to="/login">Login</NavButton>
              </Grid>
              <Grid item>
                <NavButton to="/register">Register</NavButton>
              </Grid>
            </>
          )}

      </Grid>
    </header>
  );
}
