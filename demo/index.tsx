import { render } from 'react-dom';
import React, { useState } from 'react';
import { AnyInspector } from '../src';
const App = () => {
  const [count, setCount] = useState(1);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <AnyInspector name="count" target={count} />
    </>
  );
};

render(<App />, document.getElementById('app'));
