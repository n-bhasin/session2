import React from "react";
// import logo from "./logo.svg";
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import history from "./components/History";
import { Router } from "react-router-dom";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import Error from "./components/Error";

/***Exercise 1 */
// const NewRoute = () => {
//   return (
//     <div>
//       <p>New Route</p>
//     </div>
//   );
// };
// const Home = () => {
//   return (
//     <div>
//       <p>Home</p>
//     </div>
//   );
// };
function App() {
  return (
    <Router history={history}>
      <Navigation />
    </Router>

    // <BrowserRouter>
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/contact">Contact</Link>
    //     </li>
    //     <li>
    //       <Link to="/about">About</Link>
    //     </li>
    //     <li>
    //       <Link to="/error">Error</Link>
    //     </li>
    //   </ul>
    //   <Switch>
    //     <Route path="/" component={Home} exact />
    //     <Route path="/contact" component={Contact} />
    //     <Route path="/about" component={About} />
    //     <Route path="/error" component={Error} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
