import {
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import React from 'react';

function About() {
  return (
    <article>
      <Typography variant="body1" gutterBottom>
        Challenge purprosed by
        {' '}
        <a href="https://indianatechnologies.dev">indianatechnologies.dev</a>
        {' '}
        on Wed, Feb 24 at 12:57 PM GMT-03.
      </Typography>

      <Typography variant="h4" gutterBottom>Challenge:</Typography>
      <Typography variant="body1" gutterBottom>
        Assume this project is for a large retailer (ElectronicX).
      </Typography>
      <Typography variant="body1" gutterBottom>
        Assume the items they sell can be any electronic product: Radio, Computer,
        Cellphone, Headphones, etc.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Assume the retailer wants to be able to create new items.
      </Typography>
      <Typography variant="h4" gutterBottom>Requirements:</Typography>
      <Typography variant="h5" gutterBottom>Frontend: React</Typography>
      <List>
        <ListItem>
          <ListItemText primary="(site + /public) [Public], list items." />
        </ListItem>
        <ListItem>
          <ListItemText primary="(site + /admin) [Authentication required] CRUD items." />
        </ListItem>
        <ListItem>
          <ListItemText primary="Unit testing (obligatory)" />
        </ListItem>
      </List>
      <Typography variant="h5" gutterBottom>Backend: your choice</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Secure Authentication" />
        </ListItem>
        <ListItem>
          <List>
            <ListItem>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <ListItemText primary="CRUD Items" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Unit testing (obligatory)" />
        </ListItem>
      </List>
      <Typography variant="h5" gutterBottom>Database: your choice</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Item" />
        </ListItem>
        <ListItem>
          <List>
            <ListItem>
              <ListItemText primary="Name" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Price" />
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <ListItemText primary="Item Category" />
        </ListItem>
        <ListItem>
          <List>
            <ListItem>
              <ListItemText primary="Name" />
            </ListItem>
          </List>
        </ListItem>
        <ListItem>
          <ListItemText primary="User" />
        </ListItem>
        <ListItem>
          <List>
            <ListItem>
              <ListItemText primary="Username" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Password" />
            </ListItem>
          </List>
        </ListItem>
      </List>

      <Typography variant="body1" gutterBottom>
        You have 4 days to finish.
        If you can’t finish the assignment in time, please write in English in the
        {' '}
        <a href="https://github.com/bisk8s/ElectronicX/blob/master/README.md">README.md</a>
        {' '}
        howyou would finish the assignment.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Some of the things are left out on purpose, add your personal style.
        Upload the finished project to Github and send the link to the repo.
      </Typography>
    </article>
  );
}

export default About;
