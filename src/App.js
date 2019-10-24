import React from "react";
import "./styles/App.scss";
import { Button } from "evergreen-ui";

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
    <div className="counter-button">
      <Button appearance="primary" onClick={increment}>
        Increment
      </Button>
      <Button appearance="primary" onClick={decrement}>
        Decrement
      </Button>
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
