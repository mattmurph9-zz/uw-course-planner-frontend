import React from 'react';
import './css/App.css';
import Layout from './components/Layout'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>UW Course Planner</h1>
      </header>
      <Layout />
    </div>);
}

export default App;