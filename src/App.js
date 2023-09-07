import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from "./Mail";
import EmailList from "./EmailList";
import {BrowserRouter as Router,  Routes, Route} from "react-router-dom";
import SendMail from './SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from "./Login";
import { auth } from './firebase';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) =>{
      if(user)
      {
        // The user is signed in
        // This is working beacause if you once signed in then it will make a cookie for it.
        // And when you again come back it will extract the information from there

        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }))
      }
    })

  }, [])

  return (
    <Router>

      {!user ? <Login /> :

      <div className="app">
          <Header />

          <div className="app__body">
            <Sidebar />

            <Routes>
              <Route path="/mail" element={<Mail />} />

              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>

          {sendMessageIsOpen && <SendMail />}
      </div>

      }
    </Router>
  );
}

export default App;
