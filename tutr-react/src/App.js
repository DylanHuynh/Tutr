import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import OfficerDash from "./pages/OfficerDash.js";
import UnapprovedMatches from './pages/UnapprovedMatches';


function App() {
  return (
    <div className="App">
       <Router>
                <Route exact path="/" render={(props) => <Home/>} />
                <Route exact path="/officerDash" render={(props) => <OfficerDash/>} />
                <Route exact path="/unapprovedMatches" render={(props) => <UnapprovedMatches/>} />

            </Router>
    </div>
  );
}

export default App;
