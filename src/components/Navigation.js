import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
import Student from "./Student";

import { Route, Switch, Link } from "react-router-dom";
import Redirect from "./Redirect";

const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
        <li>
          <Link to="/student/Jim Smith">Student:Jim Smith</Link>
        </li>
        <li>
          <Link to="/student/Jim Smith/5001">
            Student:Jim Smith, Student No: 5001
          </Link>
        </li>

        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/error" component={Error} />
        <Route path="/student/:studentname/:studentno?" component={Student} />
        <Route path="/redirect" component={Redirect} />
      </Switch>
    </>
  );
};

export default Navigation;
