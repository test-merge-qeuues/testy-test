import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Counter</h1>
        <p data-testid="count">Count: {count}</p>
        <button onClick={() => setCount(count + 1)} data-testid="increment-btn">
          Increment
        </button>
      </header>
    </div>
  );
}

export default App;
