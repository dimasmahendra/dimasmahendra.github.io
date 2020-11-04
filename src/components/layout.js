import React, {Component} from "react"
import "../../static/css/reset.css"
import "../../static/css/plugins.css"
import "../../static/css/style.css"
import "../../static/css/color.css"
import Header from '../components/parts/header'
import Navbar from '../components/parts/navbar'
import Wrapper from '../components/parts/content/wrapper'

class Layout extends Component {
  render() {
    return (
		<>
        	<Header/>
        	<Navbar/>
			<>
				<div id="wrapper">
					<Wrapper />
				</div>
				<div className="share-wrapper isShare">
					<div className="share-title"><span>Share</span></div>
					<div className="close-share soa"><span>Close</span><i className="fal fa-times"></i></div>
					<div className="share-inner soa">
						<div className="share-container"></div>
					</div>
				</div>
			</>
      	</>      
    );
  }
}

export default Layout;