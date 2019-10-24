import React from "react";
import "./styles/App.scss";

const AppContext = React.createContext();

function Counter() {
  let { count } = React.useContext(AppContext);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
}

function CounterButtons() {
  let { increment, decrement } = React.useContext(AppContext);
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function App() {
  let [count, setCount] = React.useState(0);
  return (
    <AppContext.Provider
      value={{
        count,
        increment: () => setCount(c => c + 1),
        decrement: () => setCount(c => c - 1)
      }}
    >
      <div className="App">
        <section>
          <Counter />
          <CounterButtons />
        </section>
      </div>
    </AppContext.Provider>
  );
}

export default App;
