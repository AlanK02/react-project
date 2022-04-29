import './App.css';
import React from 'react';
import Main from './Main';
import Login from './Login';
import UserComponent from './components/UserComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/index' element={<Main/>}/>
                <Route path="/login" element= {<Login/>}/>
                <Route path="/users" element={<UserComponent/>}/>
        </Routes>
    </Router>
  );
}

export default App;
