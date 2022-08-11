import { useState } from 'react';
import { createStore } from 'redux';

function reducer(
  _: any,
  action: {
    type: string;
    payload: any;
  }
) {
  return action.payload;
}

export const useStore = (name: string, target: any) => {
  const [store] = useState(() => {
    if (typeof window === 'undefined' || !window.__REDUX_DEVTOOLS_EXTENSION__) {
      return undefined;
    }
    return createStore(
      reducer,
      target,
      window.__REDUX_DEVTOOLS_EXTENSION__({
        name: name,
      })
    );
  });

  return store;
};
