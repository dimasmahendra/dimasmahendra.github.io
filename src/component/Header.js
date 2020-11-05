import React, {Component} from "react";

// Class Component Header
class Header extends Component {
  render() {
    return (
		<>
			<header className="main-header">
				<a className="logo-holder" href="index.html">
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
							<li>
								<a href="{#}">Portfolio</a>
								<ul>
									<li><a href="portfolio.html">Masonry</a></li>
									<li><a href="portfolio2.html">Masonry 2</a></li>
									<li><a href="portfolio3.html">Boxed</a></li>
									<li><a href="portfolio4.html">Boxed 2 </a></li>
									<li><a href="portfolio5.html">Parallax</a></li>
									<li><a href="portfolio6.html">Parallax dark</a></li>
									<li><a href="portfolio8.html">List</a></li>
									<li>
										<a href="{#}">Single</a>
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
							
							<li><a href="blog.html">Blog</a></li>
							<li>
								<a href="{#}">Pages</a>
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
export default Header;