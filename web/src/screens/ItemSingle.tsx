import React from 'react';
import useAxios from 'axios-hooks';
import { useParams } from 'react-router';

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
    <article>
      <h2>{item && item.name}</h2>
    </article>
  );
}
