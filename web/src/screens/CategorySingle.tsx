import React from 'react';
import useAxios from 'axios-hooks';
import { useParams } from 'react-router';
import { Grid, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

export default function CategorySingle() {
  const { id } = useParams<{id:string}>();
  const classes = useStyles();

  const [{
    data: category,
  }] = useAxios(
    {
      method: 'GET',
      url: `/itemCategories/${id}`,
    },
  );
  console.info(category);
  const { __items__: items } = category || { __items__: [] };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Category:
          {' '}
          {category?.name}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        {items && items.map((item:{name:string, id:number}) => (
          <Grid item xs={2} key={item.id}>
            <Link to={`/item/${item.id}`}>
              <Paper className={classes.paper}>
                {item.name}
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>

    </Grid>
  );
}
