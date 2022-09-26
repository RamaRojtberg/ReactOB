import logo from './logo.svg';
import './App.css';
import ComponentA from './components/componentA';

function App() {

  const contactoPrueba = {
    name: 'Fulanito',
    surname: 'de OpenBootcamp',
    email: 'fulanito@open-bootcamp.com',
    conected: false,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentA contact={contactoPrueba}></ComponentA>
      </header>
    </div>
  );
}

export default App;
