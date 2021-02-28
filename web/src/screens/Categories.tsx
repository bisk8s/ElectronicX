import React from 'react';
import { Link } from 'react-router-dom';
import useAxios from 'axios-hooks';

export default function Categories() {
  const [{
    data: items,
  }] = useAxios(
    {
      method: 'GET',
      url: '/itemCategories',
    },
  );

  return (
    <article>
      <h2>Categories</h2>
      <div>
        <ul>
          {items && items.slice(0, 10).map((item:{name:string, id:number}) => (
            <li key={item.id}>
              <Link to={`/itemCategories/${item.id}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
