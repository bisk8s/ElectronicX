import React from 'react';
import useAxios from 'axios-hooks';
import { useParams } from 'react-router';

export default function CategorySingle() {
  const { id } = useParams<{id:string}>();

  const [{
    data: categories,
  }] = useAxios(
    {
      method: 'GET',
      url: `/itemCategories/${id}`,
    },
  );

  return (
    <article>
      <h2>{categories && categories.name}</h2>
    </article>
  );
}
