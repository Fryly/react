import React from 'react';
import './App.css';
import Header from './Header/Header'
import Content from './Content/Content';
// import Layout from './hoc/Layout';

function App() {
  return (
    <div className='App'>
        <Header Text='To-do'/>
        <Content/>
    </div>
  );
}

export default App;
