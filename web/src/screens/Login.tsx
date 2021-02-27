import React, { useState } from 'react';
import { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { SystemActionTypes, UPDATE_SESSION } from '@redux/store/system/ActionTypes';
import { StyledInput, StyledLogin } from '@components/styled/Inputs';

export default function Login() {
  const system = useSelector<RootState>((state) => state.system);
  const dispatch = useDispatch<Dispatch<SystemActionTypes>>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [hasUsername, setHasUsername] = useState(true);
  const [hasPassword, setHasPassword] = useState(true);

  const doLogin = () => {
    // feedback
    setHasUsername(!!username);
    setHasPassword(!!password);

    // return toa void conflicts
    if (!username || !password) return;

    // TODO: login on service

    // callback
    const token = '1231654';
    dispatch({
      type: UPDATE_SESSION,
      payload: {
        userName: username,
        loggedIn: false,
        session: token,
      },
    });
  };

  return (
    <>
      <StyledLogin>
        <h2>Login</h2>
        <StyledInput
          correct={hasUsername}
          type="text"
          placeholder="username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <StyledInput
          correct={hasPassword}
          type="password"
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
        />

        <button
          type="button"
          onClick={() => doLogin()}
        >
          Send
        </button>
      </StyledLogin>
      {/* TODO: Remove this pre */}
      <pre>
        {JSON.stringify(system, null, 4)}
      </pre>
    </>
  );
}
