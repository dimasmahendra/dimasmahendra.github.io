import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
        <header className="main-header">
            <a className="logo-holder" href="index.html">
                <img src="images/logo.png"  alt="" />
            </a>
            <div className="nav-button but-hol">
                <span  className="nos"></span>
                <span className="ncs"></span>
                <span className="nbs"></span>
                <div className="menu-button-text">Menu</div>
            </div>
            <div className="header-social">
                <ul >
                    <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" target="_blank"><i className="fab fa-vk"></i></a></li>
                </ul>
            </div>
            <div className="show-share showshare">
                <i className="fal fa-retweet"></i>
                <span>Share This</span>
            </div>
        </header>
    );
  }
}
export default Header;