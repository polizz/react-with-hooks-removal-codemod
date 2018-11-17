import React from "react";
import ReactDOM from "react-dom";
import withHooks, { useState, useEffect } from 'react-with-hooks';

const Counter = withHooks(() => {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    document.title = "count is " + count;
  })
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
});

const CounterWithFunction = withHooks(function () {
  const [ count, setCount ] = useState(0);
  useEffect(() => {
    document.title = "count is " + count;
  })
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
});

const App = () => (
 <div>
   <Counter />
   <Counter />
   <CounterWithFunction />
 </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);