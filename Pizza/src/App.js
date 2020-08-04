import './App.css';
import React from 'react';

import { Route } from 'react-router-dom'

import Header from './Component/Header/Header';
import Cart from './Pages/Cart'
import Home from './Pages/Home'


const App = () => {
    return (
      <div className="Wrapper">
          <Header/>
          <div className="Content">
              <Route path='/' component={Home} exact/>
              <Route path='/cart' component={Cart} exact/>
          </div>
      </div>
    )
  }

export default App;
