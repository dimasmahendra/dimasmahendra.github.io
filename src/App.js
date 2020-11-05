import React, { Component } from 'react';
import Header from './component/Header';
import Navbar from './component/Navbar';

class App extends Component {
  render() {
    return (
		<>
			<div className="loader-wrap">
				<div className="pin"></div>
			</div>
			<div id="main">
				<Header />
				<div id="wrapper">
					<Navbar />					
				</div>
			</div>
		</>
    );
  }
}

export default App;
