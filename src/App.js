import React from 'react';
import { Link } from 'react-router-dom'
import routes from './config/routes'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
