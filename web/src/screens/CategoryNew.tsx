import React, { useState } from 'react';
import useAxios from 'axios-hooks';

import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import { Redirect, useParams } from 'react-router';

export default function CategoryNew() {
  const { id } = useParams<{id:string}>();

  const [itemName, setItemName] = useState('');
  const [hasItemName, setHasItemName] = useState(true);

  const [{
    data: item,
  }] = useAxios(
    {
      method: 'GET',
      url: `/items/${id}`,
    },
  );

  const [
    {
      data: postData,
      loading: postLoading,
      error: postError,
    },
    executePost,
  ] = useAxios(
    {
      method: 'POST',
      url: '/items',
    },
    { manual: true },
  );

  if (postData) return <Redirect to="/categories" push />;

  const onSendClick = () => {
    setHasItemName(!!itemName);
    if (!itemName) return;
    executePost({
      data: {
        name: itemName,
      },
    });
  };

  return (
    <article>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h4" gutterBottom>New Category:</Typography>
        </Grid>

        {item && (
        <Grid item>
          <Typography variant="h5" gutterBottom>{item.name}</Typography>
        </Grid>
        )}

        <Grid item>
          <TextField
            variant="outlined"
            error={!hasItemName}
            helperText={!hasItemName ? 'Field is required' : undefined}
            type="text"
            placeholder="Name"
            onChange={({ target }) => setItemName(target.value)}
          />
        </Grid>

        <Grid item xs={2}>
          <Button variant="contained" onClick={onSendClick}>
            { !postLoading && !postError ? 'Add new Item' : null}
            { postLoading ? ('Loading') : null}
            { postError ? ('Error!') : null}
          </Button>
        </Grid>

      </Grid>
    </article>
  );
}
