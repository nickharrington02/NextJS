import { useState } from 'react';

function Counter({ incrementValue, buttonColor }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + incrementValue;
      return newCount > 10 ? 0 : newCount;
    });
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button
        onClick={handleIncrement}
        style={{ backgroundColor: buttonColor }}
      >
        Increment by {incrementValue}
      </button>
    </div>
  );
}

export default Counter;
