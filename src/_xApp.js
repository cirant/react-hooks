import React from 'react';
import './App.css';


const CountContext = React.createContext()

function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error(`useCount must be used within a CountProvider`)
  }
  return context
}
function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  const value = React.useMemo(() => [count, setCount], [count])
  return <CountContext.Provider value={value} {...props} />
}

const Counter = () => {
  const [count] = useCount();
  return <div className="App">hola mundo {count}</div>
}

const CounterBtn = () => {
  const [setCount] = useCount()
  const increment = () => setCount(c => c + 1);
  return <button onClick={increment}>Click </button>
}

function App() {
  return (
    <div className="App">
      hola mundo 1
      <CountProvider>
        <Counter />
        <CounterBtn />
      </CountProvider>
    </div>
  );
}

export default App;
