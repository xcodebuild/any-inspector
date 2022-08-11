import React, { useEffect, useRef } from 'react';
import { useStore } from './store';
import { Provider } from 'react-redux';
import { Store } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any;
  }
}

export const AnyInspector: React.FC<{ name: string; target: any }> = ({
  name,
  target,
}) => {
  const prevRef = useRef<any>(null);
  const store = useStore(name, target);

  useEffect(() => {
    if (!store) {
      return;
    }
    if (target !== prevRef.current) {
      (store as unknown as Store).dispatch({
        type: 'UPDATE_' + name,
        payload: target,
      });
      prevRef.current = target;
    }
  }, [target]);

  if (!store) {
    return null;
  }
  return <Provider store={store}>{null}</Provider>;
};
