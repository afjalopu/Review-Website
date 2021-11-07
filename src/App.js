import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Culture from "./components/Culture/Culture";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/friends">
            <Layout>
              <Friends />
            </Layout>
          </Route>
          <Route path="/friend/:friendId">
            <Layout>
              <FriendDetails />
            </Layout>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/culture">
            <Layout>
              <Culture />
            </Layout>
          </Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
