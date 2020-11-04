import React, {Component} from "react";

class Navbar extends Component {
  render() {
    return (
        <>
            <div className="nav-overlay">
                <div className="tooltip color-bg">Close Menu</div>
            </div>
			<div className="nav-holder">
                <a className="header-logo" href="index.html"><img src="images/logo2.png" alt="" /></a>
                <div className="nav-title"><span>Menu</span></div>
                <div className="nav-inner-wrap">
                    <nav className="nav-inner sound-nav" id="menu">
                        <ul>
                            <li>
                                <a href="#" className="act-link">Home</a>
                                <ul>
                                    <li><a href="index.html" className="act-link">Half Slider</a></li>
                                    <li><a href="index2.html">Half Image</a></li>
                                    <li><a href="index3.html">Impulse Image</a></li>
                                    <li><a href="index4.html">Fullscreen  Image</a></li>
                                    <li><a href="index5.html">Fullscreen  Slider</a></li>
                                    <li><a href="index6.html">Slideshow</a></li>
                                    <li><a href="index7.html">Fullscreen Carousel</a></li>
                                    <li><a href="index8.html">Video</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Portfolio</a>
                                <ul>
                                    <li><a href="portfolio.html">Masonry</a></li>
                                    <li><a href="portfolio2.html">Masonry 2</a></li>
                                    <li><a href="portfolio3.html">Boxed</a></li>
                                    <li><a href="portfolio4.html">Boxed 2 </a></li>
                                    <li><a href="portfolio5.html">Parallax</a></li>
                                    <li><a href="portfolio6.html">Parallax dark</a></li>
                                    <li><a href="portfolio8.html">List</a></li>
                                    <li>
                                        <a href="#">Single</a>
                                        <ul>
                                            <li><a href="portfolio-single.html">Carousel</a></li>
                                            <li><a href="portfolio-single2.html">Carousel 2</a></li>
                                            <li><a href="portfolio-single3.html">Gallery</a></li>
                                            <li><a href="portfolio-single4.html">Gallery 2</a></li>
                                            <li><a href="portfolio-single5.html">Slider</a></li>
                                            <li><a href="portfolio-single6.html">Showcase</a></li>
                                            <li><a href="portfolio-single7.html">Fullscreen  Slider</a></li>
                                            <li><a href="portfolio-single8.html">Video</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contacts.html">Contacts</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li>
                                <a href="#">Pages</a>
                                <ul>
                                    <li><a href="services2.html">Services 2</a></li>
                                    <li><a href="blog-single.html">Blog single</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-single.html">Team Single</a></li>
                                    <li><a href="coming-soon.html">Coming soon</a></li>
                                    <li><a href="404.html">404</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
  }
}
export default Navbar;