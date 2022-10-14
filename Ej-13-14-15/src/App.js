import React from 'react';
import Tasklist from './components/lists/TaskList';
// import Settings from './settings/Settings';

/**
 * Función Anónima para crear un Componente principal
 * @returns {React.Component} Componente principal de nuestra aplicación
 */
const App = () => {
    return (
      <div>
        <Tasklist></Tasklist>
        {/* <Settings /> */}
      </div>
    );
};

export default App;