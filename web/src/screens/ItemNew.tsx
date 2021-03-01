import React, { useState } from 'react';
import useAxios from 'axios-hooks';

import {
  Button, Grid, TextField, Typography,
} from '@material-ui/core';
import { Redirect, useParams } from 'react-router';

export default function ItemNew() {
  const { id } = useParams<{id:string}>();

  const [itemName, setItemName] = useState('');
  const [hasItemName, setHasItemName] = useState(true);

  const [price, setPrice] = useState('');
  const [hasPrice, setHasPrice] = useState(true);

  const [quantity, setQuantity] = useState('');
  const [hasQuantity, setHasQuantity] = useState(true);

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

  if (postData) return <Redirect to="/items" push />;

  const onSendClick = () => {
    setHasItemName(!!itemName);
    setHasPrice(!!price);
    setHasQuantity(!!quantity);
    if (!itemName || !price || !quantity) return;
    executePost({
      data: {
        name: itemName,
        price,
        quantity,
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
          <Typography variant="h4" gutterBottom>New Items:</Typography>
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

        <Grid item>
          <TextField
            variant="outlined"
            error={!hasPrice}
            helperText={!hasPrice ? 'Field is required' : undefined}
            type="number"
            placeholder="Price"
            onChange={({ target }) => setPrice(target.value)}
          />
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            error={!hasQuantity}
            helperText={!hasQuantity ? 'Field is required' : undefined}
            type="number"
            placeholder="Qty."
            onChange={({ target }) => setQuantity(target.value)}
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
