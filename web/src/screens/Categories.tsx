import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useAxios from 'axios-hooks';
import { SystemState } from '@redux/store/system/Types';
import { RootState } from '@redux/store';
import {
  Button, Grid, Paper, Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Categories() {
  const system:SystemState = useSelector<RootState>((state) => state.system) as SystemState;
  const { loggedIn } = system;
  const classes = useStyles();

  const [{
    data: categories,
  },
  refreshItem] = useAxios(
    {
      method: 'GET',
      url: '/itemCategories',
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
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>Categories:</Typography>
        </Grid>

        {loggedIn && (
          <Grid item xs={2}>
            <Link to="/category/new">
              <Button variant="contained">+ Add new Category</Button>
            </Link>
          </Grid>
        )}

        {categories && categories.map((item:{name:string, id:number}) => (
          <Grid item xs={2} key={item.id}>
            <Link to={`/category/${item.id}`}>
              <Paper className={classes.paper}>
                {item.name}
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </article>
  );
}
