import React from 'react';
import './App.css';
import Header from './header/Header';
import Content from './content/Content';
import Nav from './nav/Nav';

const App = () => {
  
  return (
    <div className="App">
        <Header Logotext='MicroLife'/>
        <Nav/>
        <Content/>
    </div>
  );
}

export default App;
