import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Loginusestate from './components/LoginUseState';
import Loginusereducer from './components/LoginUseReducer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>useReducer Examples</h1>
        {/* <Counter></Counter> */}
        {/* <Loginusestate></Loginusestate> */}
        <Loginusereducer></Loginusereducer>
      </header>
    </div>
  );
}

export default App;
