import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { SystemState } from '@redux/store/system/Types';
import { RootState } from '@redux/store';
import { Button, Grid, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';

export default function Items() {
  const system:SystemState = useSelector<RootState>((state) => state.system) as SystemState;
  const { loggedIn } = system;

  const [{
    data: items,
  },
  refreshItem] = useAxios(
    {
      method: 'GET',
      url: '/items',
    },
  );

  const location = useLocation();
  useEffect(
    () => {
      refreshItem();
    },
    [location],
  );

  return (
    <article>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <h2>Items</h2>
        </Grid>
        <Grid xs={2}>
          {loggedIn && (<Button variant="contained">+ Add new Item</Button>)}
        </Grid>

        {items && items.slice(0, 10).map((item:{name:string, id:number}) => (
          <Grid xs={2} key={item.id}>
            <Link to={`/items/${item.id}`}>
              <Paper>
                {item.name}
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </article>
  );
}
