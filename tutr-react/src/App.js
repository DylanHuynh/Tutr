import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import OfficerDash from "./pages/OfficerDash.js";
import UnapprovedMatches from './pages/UnapprovedMatches';
import TuteesLanding from './pages/TuteesLanding.js';
import TutorsData from './pages/TutorsData.js';
import TuteesData from './pages/TuteesData.js';




function App() {
  return (
    <div className="App">
            <Router>
                <Route exact path="/" render={(props) => <Home/>} />
                <Route exact path="/officerDash" render={(props) => <OfficerDash/>} />
                <Route exact path="/unapprovedMatches" render={(props) => <UnapprovedMatches/>} />
                <Route exact path="/tuteesLanding" render={(props) => <TuteesLanding/>} />
                <Route exact path="/tutorsData" render={(props) => <TutorsData/>} />
                <Route exact path="/tuteesData" render={(props) => <TuteesData/>} />
            </Router>
    </div>
  );
}

export default App;
