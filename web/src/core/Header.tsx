import React from 'react';

import { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';

import {
  Navbar,
  NavButton,
  LogoPlace,
  Headline,
  Separator,
  RightPanel,
} from '@components/styled/Navbar';

import logoImage from '@public/logoBadge.svg';
import { SystemState } from '@redux/store/system/Types';
import { SystemActionTypes, UPDATE_SESSION } from '@redux/store/system/ActionTypes';
import { Dispatch } from 'redux';

export default function Header() {
  const system:SystemState = useSelector<RootState>((state) => state.system) as SystemState;
  const { loggedIn } = system;

  const dispatch = useDispatch<Dispatch<SystemActionTypes>>();
  const doLogout = () => {
    dispatch({
      type: UPDATE_SESSION,
      payload: {
        userName: '',
        session: '',
        loggedIn: false,
      },
    });
  };

  return (
    <header>
      <Navbar>
        <LogoPlace src={logoImage} className="App-logo" alt="logo" height={60} width={60} />
        <Headline>ElectronicX</Headline>
        <NavButton to="/">Home</NavButton>
        <NavButton to="/about">About</NavButton>
        <NavButton to="/items">Items</NavButton>
        <NavButton to="/categories">Categories</NavButton>

        <RightPanel>
          <Separator />
          {loggedIn
            ? (
              <NavButton to="/" onClick={doLogout}>Logout</NavButton>
            )
            : (
              <>
                <NavButton to="/login">Login</NavButton>
                <NavButton to="/register">Register</NavButton>
              </>
            )}
        </RightPanel>
      </Navbar>
    </header>
  );
}
