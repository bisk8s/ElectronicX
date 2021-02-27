import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { SystemActionTypes, UPDATE_SESSION } from '@redux/store/system/ActionTypes';
import { StyledInput, StyledLogin } from '@components/styled/Inputs';
import useAxios from 'axios-hooks';
import { Redirect } from 'react-router';

export default function Login() {
  const dispatch = useDispatch<Dispatch<SystemActionTypes>>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [hasUsername, setHasUsername] = useState(true);
  const [hasPassword, setHasPassword] = useState(true);

  const [
    {
      data: postLoginData,
      loading: postLoginLoading,
      error: postLoginError,
    },
    executePost,
  ] = useAxios(
    {
      method: 'POST',
      url: '/auth',
    },
    { manual: true },
  );

  // callback
  useEffect(() => {
    if (postLoginData) {
      try {
        const { token } = postLoginData;
        dispatch({
          type: UPDATE_SESSION,
          payload: {
            userName: username,
            session: token,
            loggedIn: !!token,
          },
        });
      } catch (error) {
        // TODO: login error
      }
    }
  }, [postLoginData]);

  const doLogin = () => {
    setHasUsername(!!username);
    setHasPassword(!!password);
    // return to avoid conflicts
    if (!username || !password) return;
    executePost({
      data: {
        username,
        password,
      },
    });
  };

  if (postLoginData) return <Redirect to="/" push />;

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
          { !postLoginLoading && !postLoginError ? 'Send' : null}
          { postLoginLoading ? ('Loading') : null}
          { postLoginError ? ('Error!') : null}
        </button>
      </StyledLogin>
    </>
  );
}
