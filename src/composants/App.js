
import './App.css';
import {Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import React, { Fragment } from 'react';
import About from '../pages/about';
import Home from '../pages/home';
import Housing from '../pages/housing';
import E404 from '../pages/e404';
import Footer from './footer';
import Header from './header';



class App extends React.Component {
 
  render(){
  return (
  <Fragment>
    <div className="wrapper">
					<Header />
					<Router>
            <Switch>
						<Route exact path="/" component={Home}>
							<Home />
						</Route>
						<Route path="/about" component={About}>
							<About />
						</Route>
						<Route path="/housing/:id" component={Housing}>
							<Housing />
						</Route>
						<Route path="*" component={E404}>
							<E404 />
						</Route>
            </Switch>
					</Router>
          
				</div>
				<Footer />
  </Fragment>
  );
}
}


export default App;
