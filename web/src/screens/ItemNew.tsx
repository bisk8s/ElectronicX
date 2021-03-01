import React, { useState } from 'react';
import useAxios from 'axios-hooks';

import {
  Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography,
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

  const [category, setCategory] = useState('');

  const [{
    data: item,
  }] = useAxios(
    {
      method: 'GET',
      url: `/items/${id}`,
    },
  );

  const [{
    data: categories,
  },
  ] = useAxios(
    {
      method: 'GET',
      url: '/itemCategories',
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
        categories: [{
          id: category,
        }],
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

        <Grid item>
          <FormControl variant="outlined">
            <InputLabel id="select-label">Category</InputLabel>
            <Select
              labelId="select-label"
              onChange={({ target }) => setCategory(`${target.value}`)}
              style={{ width: 200 }}
            >
              { categories && categories.map((cat:{name:string, id:number}) => (
                <MenuItem key={cat.id} value={cat.id}>
                  {cat.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
