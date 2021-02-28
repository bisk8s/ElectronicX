import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';

import Grid from '@material-ui/core/Grid';
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
          <h2>Home</h2>

          <p>
            Today is the deadline for this challenge.
            I´m adding some final touches to the project frontend and delivering it.
          </p>
          <p>
            It was a good test. I´ve reached a lot in 4 days.
            It is far to be a portfolio project yet, although it is a very stable little project.
          </p>
          <p>
            I´ve lost a little time trying to publish it to
            {' '}
            <a href="https://electricx.herokuapp.com/" target="blank">Heroku</a>
            {' '}
            If I had more time I would have published it, but
            because their container solution is in beta yet, I decided to leave it alone.
          </p>
          <p>
            Also, he goes a list of things I would do if I had had more time:
          </p>
          <ul>
            <ul>
              <li>
                Tests:
                <ul>
                  <li>
                    Schema validation for responses in the api
                  </li>
                  <li>
                    Response check for the web app
                  </li>
                </ul>
              </li>
              <li>
                Api:
                <ul>
                  <li>Emai validation</li>
                </ul>
              </li>
              <li>
                Web:
                <ul>
                  <li>A sexy layout</li>
                  <li>Shopping cart support</li>
                </ul>
              </li>
              <li>
                Db:
                <ul><li>user types [admin/customer]</li></ul>
              </li>
            </ul>
          </ul>
          <p>
            The next steps for this project would be adding a shopping cart and payment support.
          </p>
          <p>
            I hope that this project had pleased you as it pleases me.
          </p>
          <p>
            Thanks for reading 😎
          </p>
        </Grid>
        <Grid item xs={4}>
          <h3>Top 10 Newest items:</h3>
          <ul>
            {items && items.slice(0, 10).map((item:{name:string, id:number}) => (
              <li key={item.id}>
                <Link to={`/items/${item.id}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <h3>Top 3 Newest users:</h3>
          <ul>
            {users && users.slice(0, 3).map((user:{username:string, id:number}) => (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>
                  {user.username}
                </Link>
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </article>
  );
}
