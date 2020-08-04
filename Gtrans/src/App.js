import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Logo from './assets/busOne.png'
import './App.css';
import Sidebar from './Component/Sidebar/Sidebar';
import Main from './Page/Main/Main';
import Bus from './Page/Bus/Bus';
import Trolleybus from './Page/Trolleybus/Trolleybus';
import Taxi from './Page/Taxi/Taxi';

function App() {
  return (
    <div className="Wrapper">
      <div className="Header">
        <img src={Logo} alt="logo"/>
        <div className="Header_text">
          <h1>Транспорт в Гомеле</h1>
          <p className="Header__subtitle">сайт о городском пассажирском транспорте</p>
        </div>
      </div>
      <div className="Content">
        <Sidebar/>
        <Switch>
          <Route path='/' component={Main} exact/>
          <Route path='/bus' component={Bus} exact/>
          <Route path='/trolleybus' component={Trolleybus} exact/>
          <Route path='/taxi' component={Taxi} exact/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
