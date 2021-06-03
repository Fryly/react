import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Header } from './Components';
import './App.css';

import Main from './Components/Pages/Main';
import Signup from './Components/Pages/Signup';
import Signin from './Components/Pages/Signin';
import { useAuth } from './hooks/auth.hook';
import { useForm } from './hooks/form.hook';
import { AuthContext } from './context/AuthContext';
import { FormContext } from './context/FormContext';



function App() {
const { login, logout, userId, name, isLoad } = useAuth();
const { error } = useForm();
  return (
    <AuthContext.Provider value={{
      login, logout, userId, name
    }}>
      <div className="App">
        <div className="Wrapper">
          <Header logginIn={isLoad} />
          <div className="Content-todo">
            {
              isLoad &&
              <Switch>
                <Route path='/main' component={Main}/>
                <Redirect to='/main' />
              </Switch>
            }
            {
              !isLoad && 
              <Switch>
                <Route path='/' exact>
                  <div className="No-auth" >Please log in</div>
                </Route>
                <FormContext.Provider value={{
                  error
                }}>
                  <Route path='/login' component={Signin} />
                  <Route path='/registration' component={Signup} />
                </FormContext.Provider>
                <Redirect to='/' />
              </Switch>
            }
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
