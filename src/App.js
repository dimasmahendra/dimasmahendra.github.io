import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header';
import Contact from './component/pages/Contact';
import Home from './component/pages/Home';

class App extends Component {
  render() {
    return (
		<>
			<div className="loader-wrap">
				<div className="pin"></div>
			</div>
			<div id="main">
				<Router>
					<Header />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/contact' component={Contact} />
					</Switch>
				</Router>
			</div>
		</>
    );
  }
}

export default App;
