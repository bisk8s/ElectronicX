import React from 'react';
import useAxios from 'axios-hooks';

export default function Home() {
  const [{
    data: users,
  }] = useAxios(
    {
      method: 'GET',
      url: '/users',
    },
  );

  const [{
    data: items,
  }] = useAxios(
    {
      method: 'GET',
      url: '/items',
    },
  );

  return (
    <article>
      <h2>Home</h2>
      <div>
        <h3>Top 10 Newest items</h3>
        <ul>
          {items && items.slice(0, 10).map((user:{name:string, id:number}) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <h3>Top 3 Newest users</h3>
        <ul>
          {users && users.slice(0, 3).map((user:{username:string, id:number}) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
