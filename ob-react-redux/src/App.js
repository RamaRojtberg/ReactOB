import logo from './logo.svg';
import './App.css';
import TodosContainer from './components/containers/TodoContainer';
import Todoformcontainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <TodosContainer></TodosContainer>
        <Todoformcontainer></Todoformcontainer>
        {/* Filter options contain filter container */}
        <Filteroptions></Filteroptions>

      </header>
    </div>
  );
}

export default App;
