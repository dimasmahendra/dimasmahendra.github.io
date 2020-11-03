import React, {Component} from "react"
import {Helmet} from "react-helmet"
import "../../static/styles/main.css"
import Navbar from '../components/parts/navbar'
import Welcome from '../components/parts/welcome'

class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Welcome/>
        <Helmet>
            <script src="/js/app-1.js"></script>            
            <script src="/js/app-2.js"></script>            
            <script src="/js/app-3.js"></script>
        </Helmet>
      </div>      
    );
  }
}

export default Layout;