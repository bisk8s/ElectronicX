import React from 'react';
import useAxios from 'axios-hooks';

export default function Home() {
  const [{
    data: getData,
    loading: getLoading,
    error: getError,
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
        <h3>Loading</h3>
        <pre>{JSON.stringify(getLoading, null, 2)}</pre>
        <h3>Error</h3>
        <pre>{JSON.stringify(getError, null, 2)}</pre>
        <h3>Data</h3>
        <pre>{JSON.stringify(getData, null, 2)}</pre>
      </div>
    </article>
  );
}
