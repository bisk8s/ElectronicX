import React from 'react';
import useAxios from 'axios-hooks';
import { useParams } from 'react-router';
import { Grid, Typography } from '@material-ui/core';

export default function ItemsSingle() {
  const { id } = useParams<{id:string}>();

  const [{
    data: item,
  }] = useAxios(
    {
      method: 'GET',
      url: `/items/${id}`,
    },
  );

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Item:
          {' '}
          {item?.name}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Price:
          {' '}
          {item?.price}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="body1" gutterBottom>
          Qty:
          {' '}
          {item?.quantity}
        </Typography>
      </Grid>

    </Grid>
  );
}
