import React from 'react';
import { Link } from 'react-router-dom';
import useAxios from 'axios-hooks';

export default function Home() {
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
      <h2>Items</h2>
      <div>
        <ul>
          {items && items.slice(0, 10).map((item:{name:string, id:number}) => (
            <li key={item.id}>
              <Link to={`/items/${item.id}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
