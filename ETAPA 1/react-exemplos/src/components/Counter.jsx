import { useState } from 'react';

function Counter({ title, initial = 0 }) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Counter;
