import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { SystemActionTypes, UPDATE_SESSION } from '@redux/store/system/ActionTypes';
import { StyledInput, StyledLogin } from '@components/styled/Inputs';
import useAxios from 'axios-hooks';
import { Redirect } from 'react-router';

export default function Register() {
  const dispatch = useDispatch<Dispatch<SystemActionTypes>>();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [hasUsername, setHasUsername] = useState(true);
  const [hasPassword, setHasPassword] = useState(true);

  const [
    {
      data: postRegisterData,
      loading: postRegisterLoading,
      error: postRegisterError,
    },
    executePost,
  ] = useAxios(
    {
      method: 'POST',
      url: '/users',
    },
    { manual: true },
  );

  // callback
  useEffect(() => {
    if (postRegisterData) {
      try {
        const { token } = postRegisterData;
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
  }, [postRegisterData]);

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

  if (postRegisterData) return <Redirect to="/" push />;

  return (
    <>
      <StyledLogin>
        <h2>Register</h2>

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
          { !postRegisterLoading && !postRegisterError ? 'Send' : null}
          { postRegisterLoading ? ('Loading') : null}
          { postRegisterError ? ('Error!') : null}
        </button>
      </StyledLogin>
    </>
  );
}
