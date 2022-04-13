import React from "react";
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import ListTrainingSessions from "./pages/ListTrainingSessions";
import ListExercises from "./pages/ListExercises";
import EditClient from "./pages/EditClient";

function App() {
    const navStyles ={
        color: 'white',
        margin: '10px 10px',
        textDecoration: 'none',
        padding: '3px',
        cursor: 'pointer'
    }
  return (
      <BrowserRouter>
          <nav>
              <Link to="/" style={navStyles}>Home</Link>
              <Link to="/add" style={navStyles}>Add client</Link>
          </nav>
          <Routes>
              <Route path="/" element={<Home/>} exact={true}/>
              <Route path="/add" element={<AddUser/>} exact={true}/>
              <Route path="/edit/:id" element={<EditClient/>} exact={true}/>
              <Route path="/user/:id" element={<ListTrainingSessions/>} exact={true}/>
              <Route path="/user/:id/:date" element={<ListExercises/>} exact={true}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
