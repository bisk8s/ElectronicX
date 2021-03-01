import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';

import {
  Grid, List, ListItem, ListItemIcon, ListItemText, Typography,
} from '@material-ui/core';

import WebIcon from '@material-ui/icons/Web';
import BugReportIcon from '@material-ui/icons/BugReport';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import StorageIcon from '@material-ui/icons/Storage';

import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [{
    data: users,
  }, refreshUser] = useAxios(
    {
      method: 'GET',
      url: '/users',
    },
  );

  const [{
    data: items,
  }, refreshItem] = useAxios(
    {
      method: 'GET',
      url: '/items',
    },
  );

  const location = useLocation();
  useEffect(
    () => {
      refreshUser();
      refreshItem();
    },
    [location],
  );

  return (
    <article>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="body1" gutterBottom>
            Today is the deadline for this challenge.
            I´m adding some final touches to the project frontend and delivering it.
          </Typography>
          <Typography variant="body1" gutterBottom>
            It was a good test. I´ve reached a lot in 4 days.
            It is far to be a portfolio project yet, although it is a very stable little project.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I´ve lost a little time trying to publish it to
            {' '}
            <a href="https://electricx.herokuapp.com/" target="blank">Heroku</a>
            {' '}
            If I had more time I would have published it, but
            because their container solution is in beta yet, I decided to leave it alone.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Also, he goes a list of things I would do if I had had more time:
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <BugReportIcon />
              </ListItemIcon>
              <ListItemText primary="Tests:" />
              <ListItem>
                <List>
                  <ListItem>
                    <ListItemText primary="Schema validation for responses in the api" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary=" Response check for the web app" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Unit testing (obligatory)" />
                  </ListItem>
                </List>
              </ListItem>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <RoomServiceIcon />
              </ListItemIcon>
              <ListItemText primary="Api:" />
              <ListItem>
                <List>
                  <ListItem>
                    <ListItemText primary="Email validation" />
                  </ListItem>
                </List>
              </ListItem>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText primary="Web:" />
              <ListItem>
                <List>
                  <ListItem>
                    <ListItemText primary="A sexy layout" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Shopping cart support" />
                  </ListItem>
                </List>
              </ListItem>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <StorageIcon />
              </ListItemIcon>
              <ListItemText primary="Database:" />
              <ListItem>
                <List>
                  <ListItem>
                    <ListItemText primary="user types [admin/customer]" />
                  </ListItem>
                </List>
              </ListItem>
            </ListItem>
          </List>

          <Typography variant="body1" gutterBottom>
            The next steps for this project would be adding a shopping cart and payment support.
          </Typography>
          <Typography variant="body1" gutterBottom>
            I hope that this project had pleased you as it pleases me.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Thanks for reading 😎
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4" gutterBottom>Top 5 Newest items:</Typography>
          <List>
            {items && items.slice(0, 5).map((item:{name:string, id:number}) => (
              <ListItem key={item.id}>
                <Link to={`/item/${item.id}`}>
                  <ListItemText primary={item.name} />
                </Link>
              </ListItem>
            ))}
          </List>

          <Typography variant="h4" gutterBottom>Top 3 Newest users:</Typography>
          <List>
            {users && users.slice(0, 3).map((user:{username:string, id:number}) => (
              <ListItem key={user.id}>
                {/* <Link to={`/user/${user.id}`}> */}
                <ListItemText primary={user.username} />
                {/* </Link> */}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </article>
  );
}
