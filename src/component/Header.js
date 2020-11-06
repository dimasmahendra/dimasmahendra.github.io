import React, {Component} from "react";

// Class Component Header
class Header extends Component {
  render() {
    return (
		<>
			<header className="main-header">
				<a className="logo-holder" href="/">
					<img src="/assets/images/logo.png"  alt="" />
				</a>
				<div className="nav-button but-hol">
					<span className="nos"></span>
					<span className="ncs"></span>
					<span className="nbs"></span>
					<div className="menu-button-text">Menu</div>
				</div>
				<div className="header-social">
					<ul>
						<li><a href="{#}" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
						<li><a href="{#}" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
						<li><a href="{#}" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
						<li><a href="{#}" target="_blank" rel="noreferrer"><i className="fab fa-vk"></i></a></li>
					</ul>
				</div>
				<div className="show-share showshare">
					<i className="fal fa-retweet"></i>
					<span>Share This</span>
				</div>
			</header>

			<div className="nav-overlay">
				<div className="tooltip color-bg">Close Menu</div>
			</div>		
			<div className="nav-holder">
				<a className="header-logo" href="index.html"><img src="/assets/images/logo2.png" alt="" /></a>
				<div className="nav-title"><span>Menu</span></div>
				<div className="nav-inner-wrap">
					<nav className="nav-inner sound-nav" id="menu">
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</>
    );
  }
}
export default Header;