import React from 'react';
import './App.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
     <Navbar/>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/friends">
            <Navbar/>  
            <Friends/>
          </Route>
          <Route path="/family">
            <Navbar/> 
            <Family/>
          </Route>
          <Route path="/gifts">
            <Navbar/> 
            <Gifts />
          </Route>
          <Route path="/">
            <Navbar/> 
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Navbar() {
  return (
  <nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header page-scroll">
      <button type="button" className="navbar-toggle" data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand page-scroll" href="/">Mimmaes wedding</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li className="hidden">
          <a href="/"></a>
        </li>
        <li>
          <Link to="/friends" className="page-scroll">For friends</Link>
          {/* <a className="page-scroll" href="friends.html">For friends</a> */}
        </li>
        <li>
          <a className="page-scroll" href="family.html">Для семьи</a>
        </li>
        <li>
          <a className="page-scroll" href="gifts.html">Gifts</a>
        </li>
        <li>
          <a className="page-scroll btn-primary cta" href="https://forms.gle/EYsecA6eM9adZT6F9">Party
            RSVP</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
)
}

function Home() {
  return (
    <div>
     <header>
     <div className="container">
       <div className="intro-text">
         <div className="intro-lead-in">Miro & Maria</div>
         <div className="intro-heading">We're getting married</div>
         <div className="buttons">
           <a href="/family" className="page-scroll btn btn-xl">Церемония для семьи</a>
           <a href="/friends" className="page-scroll btn btn-xl">Party for friends</a>
         </div>
       </div>
     </div>
   </header>
   </div>
     );
}

function Friends() {
  return <h2 className="padTop">friends</h2>;
}

function Family() {
  return <h2 className="padTop">fam</h2>;
}

function Gifts() {
  return <h2 className="padTop">gifts</h2>;
}
