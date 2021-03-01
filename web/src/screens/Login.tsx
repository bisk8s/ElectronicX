import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { SystemActionTypes, UPDATE_SESSION } from '@redux/store/system/ActionTypes';

import useAxios from 'axios-hooks';
import { Redirect } from 'react-router';
import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';

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
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}

    >

      <Grid item>
        <Typography variant="h4" gutterBottom>Login:</Typography>
      </Grid>

      <Grid item>
        <TextField
          variant="outlined"
          error={!hasUsername}
          helperText={!hasUsername ? 'can\'t be empty' : undefined}
          type="text"
          placeholder="username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </Grid>

      <Grid item>
        <TextField
          variant="outlined"
          error={!hasPassword}
          helperText={!hasPassword ? 'can\'t be empty' : undefined}
          type="password"
          placeholder="password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          type="button"
          onClick={() => doLogin()}
        >
          { !postLoginLoading && !postLoginError ? 'Send' : null}
          { postLoginLoading ? ('Loading') : null}
          { postLoginError ? ('Error!') : null}
        </Button>
      </Grid>

    </Grid>

  );
}
