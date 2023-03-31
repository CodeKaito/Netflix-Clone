import React, { useEffect } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';

import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import './App.css'

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth => {
      if (userAuth) {

        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        dispatch(logout);
      }
    }));
    return unsubscribe;
  }, []);
  

  return (
    <div className="app">
        <Router>
          {!user ?  
          ( <LoginScreen /> ) : (
            <Switch>
              <Route path="/profile">
                <ProfileScreen />
              </Route>
              
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          )}
          
        </Router>
  </div>
  );
}

export default App;
