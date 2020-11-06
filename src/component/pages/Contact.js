import React, { Component } from "react";
import Footer from '../parts/Footer';

// className Component Header
class Contact extends Component {
    render() {
        return (
            <>
                <div id="wrapper" className="single-page-wrap">
					<div className="content">
						<div className="single-page-decor"></div>
						<div className="single-page-fixed-row">
							<div className="scroll-down-wrap">
								<div className="mousey">
									<div className="scroller"></div>
								</div>
								<span>Scroll Down</span>
							</div>
							<a href="/" className="single-page-fixed-row-link"><i className="fal fa-arrow-left"></i> <span>Back
									to home</span></a>
						</div>
						<section className="parallax-section dark-bg sec-half parallax-sec-half-right" data-scrollax-parent="true">
							<div className="bg par-elem" data-bg="/assets/images/bg/28.jpg"
								data-scrollax="properties: { translateY: '30%' }"></div>
							<div className="overlay"></div>
							<div className="pattern-bg"></div>
							<div className="container">
								<div className="section-title">
									<h2>My <span>Contact </span> Page</h2>
									<p> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
										anything embarrassing hidden in the middle of text. </p>
									<div className="horizonral-subtitle"><span>Contacts</span></div>
								</div>
							</div>
							<a href="#sec1" className="custom-scroll-link hero-start-link"><span>Let's Start</span> <i
									className="fal fa-long-arrow-down"></i></a>
						</section>
						<section data-scrollax-parent="true" id="sec1">
							<div className="section-subtitle" data-scrollax="properties: { translateY: '-250px' }">Get in
								Touch<span>//</span></div>
							<div className="container">
								<div className="fl-wrap mar-bottom">
									<div className="row">
										<div className="col-md-3">
											<div className="pr-title fl-wrap">
												<h3>Contact Details</h3>
												<span>Lorem Ipsum generators on the Internet king this the first true
													generator</span>
											</div>
										</div>
										<div className="col-md-9">
											<div className="features-box-container single-serv fl-wrap">
												<div className="row">
													<div className="features-box col-md-4">
														<div className="time-line-icon">
															<i className="fal fa-mobile-android"></i>
														</div>
														<h3>01. Phone</h3>
														<a href="{#}">+489756412322</a>
													</div>
													<div className="features-box col-md-4">
														<div className="time-line-icon">
															<i className="fal fa-compass"></i>
														</div>
														<h3>02. Location</h3>
														<a href="{#}">USA 27TH Brooklyn NY</a>
													</div>
													<div className="features-box col-md-4">
														<div className="time-line-icon">
															<i className="fal fa-envelope-open"></i>
														</div>
														<h3>03. Email</h3>
														<a href="{#}">yourmail@domain.com</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="fw-map-container fl-wrap mar-bottom">
									<div className="map-container">
										<div id="singleMap" data-latitude="40.7143528" data-longitude="-74.0059731"
											data-maptitle="Out Location"></div>
									</div>
								</div>
								<div className="fl-wrap mar-top">
									<div className="row">
										<div className="col-md-3">
											<div className="pr-title fl-wrap">
												<h3>Get In Touch</h3>
												<span>Lorem Ipsum generators on the Internet king this the first true
													generator</span>
											</div>
										</div>
										<div className="col-md-7">
											<div id="contact-form">
												<div id="message"></div>
												<form className="custom-form" action="php/contact.php" name="contactform"
													id="contactform">
													<fieldset>
														<div className="row">
															<div className="col-md-6">
																<label><i className="fal fa-user"></i></label>
																<input type="text" name="name" id="name"
																	placeholder="Your Name *" />
															</div>
															<div className="col-md-6">
																<label><i className="fal fa-envelope"></i> </label>
																<input type="text" name="email" id="email"
																	placeholder="Email Address *" />
															</div>
															<div className="col-md-6">
																<label><i className="fal fa-mobile-android"></i> </label>
																<input type="text" name="phone" id="phone" placeholder="Phone *" />
															</div>
															<div className="col-md-6">
																<select name="subject" id="subject" data-placeholder="Subject"
																	className="chosen-select sel-dec">
																	<option>Subject</option>
																	<option value="Order Project">Order Project</option>
																	<option value="Support">Support</option>
																	<option value="Other Question">Other Question</option>
																</select>
															</div>
														</div>
														<textarea name="comments" id="comments" cols="40" rows="3"
															placeholder="Your Message:"></textarea>
														<div className="verify-wrap">
															<span className="verify-text"> How many gnomes were in the story about
																the "Snow-white" ?</span>
															<select name="verify" id="verify" data-placeholder="0"
																className="chosen-select">
																<option>0</option>
																<option value="9">9</option>
																<option value="5">5</option>
																<option value="7">7</option>
																<option value="2">2</option>
															</select>
														</div>
														<div className="clearfix"></div>
														<button className="btn float-btn flat-btn color-btn" id="submit">Send
															Message</button>
													</fieldset>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-parallax-module" data-position-top="70" data-position-left="20"
								data-scrollax="properties: { translateY: '-250px' }"></div>
							<div className="bg-parallax-module" data-position-top="40" data-position-left="70"
								data-scrollax="properties: { translateY: '150px' }"></div>
							<div className="bg-parallax-module" data-position-top="80" data-position-left="80"
								data-scrollax="properties: { translateY: '350px' }"></div>
							<div className="bg-parallax-module" data-position-top="95" data-position-left="40"
								data-scrollax="properties: { translateY: '-550px' }"></div>
							<div className="sec-lines"></div>
						</section>
						<section className="dark-bg2 small-padding order-wrap">
							<div className="container">
								<div className="row">
									<div className="col-md-8">
										<h3>Find me on social networks : </h3>
									</div>
									<div className="col-md-4">
										<ul>
											<li><a href="{#}" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
											<li><a href="{#}" target="_blank"><i className="fab fa-instagram"></i></a></li>
											<li><a href="{#}" target="_blank"><i className="fab fa-twitter"></i></a></li>
											<li><a href="{#}" target="_blank"><i className="fab fa-vk"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
						</section>
					</div>
					<Footer />
					<a className="contact-btn color-bg" href="contacts.html"><i className="fal fa-envelope"></i><span>Get in Touch</span></a>
				</div>
            </>
        );
    }
}
export default Contact;
