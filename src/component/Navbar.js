import React, {Component} from "react";

// Class Component Header
class Navbar extends Component {
  render() {
    return (
        <>
            <div className="scroll-nav-wrap">
                <div className="scroll-down-wrap">
                    <div className="mousey">
                        <div className="scroller"></div>
                    </div>
                    <span>Scroll Down</span>
                </div>
                <nav className="scroll-nav scroll-init">
                    <ul>
                        <li><a className="scroll-link act-link" href="#sec1">Hero</a></li>
                        <li><a className="scroll-link" href="#sec2">About</a></li>
                        <li><a className="scroll-link" href="#sec3">Resume</a></li>
                        <li><a className="scroll-link" href="#sec4">Skills</a></li>
                        <li><a className="scroll-link" href="#sec5">Projects</a></li>
                        <li><a className="scroll-link" href="#sec6">Clients</a></li>
                    </ul>
                </nav>
            </div>

            <div class="hero-wrap" id="sec1" data-scrollax-parent="true">
                <div class="hero-inner fl-wrap full-height">
                    <div class="half-slider-img-wrap">
                        <div class="half-slider-img fl-wrap full-height">
                            <div class="half-slider-img-item">
                                <div class="bg"  data-bg="images/bg/13.jpg" data-scrollax="properties: { translateY: '250px' }" ></div>
                                <div class="overlay"></div>
                            </div>
                            <div class="half-slider-img-item">
                                <div class="bg"  data-bg="images/bg/29.jpg" data-scrollax="properties: { translateY: '250px' }" ></div>
                                <div class="overlay"></div>
                            </div>
                            <div class="half-slider-img-item">
                                <div class="bg"  data-bg="images/bg/2.jpg" data-scrollax="properties: { translateY: '250px' }" ></div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div class="half-slider-wrap  slider-carousel-wrap fl-wrap  full-height">
                        <div class="slider-nav cur_carousel-slider-container" data-slick='{"autoplay": true, "autoplaySpeed": 4000 , "pauseOnHover": false}'>
                            <div class="half-slider-item fl-wrap">
                                <div class="half-hero-wrap">
                                    <h1>Hey there ! <br/>I'm  Martin Solonick<br/>Independent <span> Digital  Designer </span></h1>
                                    <h4>I create web and graphic design</h4>
                                    <div class="clearfix"></div>
                                    <a href="#sec2" class="custom-scroll-link btn float-btn flat-btn color-btn mar-top">Let's Start</a>
                                </div>
                            </div>
                            <div class="half-slider-item fl-wrap">
                                <div class="half-hero-wrap">
                                    <h1>Design<br/> Classy and Stylish <br/>  <span>Brand Perception.</span></h1>
                                    <h4>I create web and graphic design</h4>
                                    <div class="clearfix"></div>
                                    <a href="portfolio.html" class="btn float-btn flat-btn color-btn mar-top">My Portfolio</a>
                                </div>
                            </div>
                            <div class="half-slider-item fl-wrap">
                                <div class="half-hero-wrap">
                                    <h1>Original Design <br/> Features <br/>With High  <span> Quality  Code.</span></h1>
                                    <h4>I create web and graphic design</h4>
                                    <div class="clearfix"></div>
                                    <a href="services.html" class="btn float-btn flat-btn color-btn mar-top">My services</a>
                                </div>
                            </div>
                        </div>
                        <div class="sp-cont sarr-contr sp-cont-prev"><i class="fal fa-arrow-left"></i></div>
                        <div class="sp-cont sarr-contr sp-cont-next"><i class="fal fa-arrow-right"></i></div>
                        <div class="slider-nav-counter"></div>
                    </div>
                    <div class="half-bg-dec" data-ran="12"></div>
                    <div class="hero-decor-numb"><span>40.7143528  </span><span>-74.0059731 </span> <a href="https://www.google.com/maps/" target="_blank" class="hero-decor-numb-tooltip">Based In NewYork</a></div>
                    <div class="pattern-bg"></div>
                    <div class="hero-line-dec"></div>
                </div>
            </div>
        </>
    );
  }
}
export default Navbar;