import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import React, { Fragment } from "react";
import About from "../../pages/about/about";
import Home from "../../pages/home/home";
import Housing from "../../pages/housing/housing";
import E404 from "../../pages/error404/error404";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/about" component={About}></Route>
              <Route path="/housing/:id" component={Housing}></Route>
              <Route path="*" component={E404}></Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
