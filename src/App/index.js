import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { getBoards } from '../helpers/data/boardsData';

function App() {
  // When you set up firebase add setUser method and change useState to null.
  const [user, setUser] = useState(null);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfo = {
          fullName: authed.displayName,
          username: authed.email.split('@gmail.com')[0],
          uid: authed.uid
        };
        setUser(userInfo);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  useEffect(() => {
    getBoards(user?.uid).then((response) => setBoards(response));
  }, []);
  return (
    <div className='App'>
     <Router>
        <NavBar user={user}/>
        <Routes user={user} boards={boards} setBoards={setBoards}/>
      </Router>
    </div>
  );
}

export default App;
