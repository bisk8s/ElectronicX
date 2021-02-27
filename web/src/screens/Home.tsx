import React, { } from 'react';
import { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { SystemActionTypes, UPDATE_SESSION } from '@redux/store/system/ActionTypes';

function Home() {
  const system = useSelector<RootState>((state) => state.system);
  const dispatch = useDispatch<Dispatch<SystemActionTypes>>();

  return (
    <article>
      <h2>Home</h2>
      <input type="text" />
      <button
        type="button"
        onClick={() => dispatch({
          type: UPDATE_SESSION,
          payload: {
            userName: 'abazaba',
            loggedIn: false,
            session: 'null',
          },
        })}
      >
        Set Username
      </button>
      <pre>
        {JSON.stringify(system, null, 4)}
      </pre>
    </article>
  );
}

export default Home;
