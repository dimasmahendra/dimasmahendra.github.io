import React, {Component} from "react";

class Wrapper extends Component {
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
            <div className="hero-wrap" id="sec1" data-scrollax-parent="true">         
                <div className="hero-inner fl-wrap full-height">
                    <div className="half-slider-img-wrap">
                        <div className="half-slider-img fl-wrap full-height">
                            <div className="half-slider-img-item">
                                <div className="bg"  data-bg="images/bg/13.jpg" data-scrollax="properties: { translateY: '250px' }" ></div>
                                <div className="overlay"></div>
                            </div>
                            <div className="half-slider-img-item">
                                <div className="bg"  data-bg="images/bg/29.jpg" data-scrollax="properties: { translateY: '250px' }" ></div>
                                <div className="overlay"></div>
                            </div>
                            <div className="half-slider-img-item">
                                <div className="bg"  data-bg="images/bg/2.jpg" data-scrollax="properties: { translateY: '250px' }" ></div>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div className="half-slider-wrap  slider-carousel-wrap fl-wrap  full-height">
                        <div className="slider-nav cur_carousel-slider-container" data-slick='{"autoplay": true, "autoplaySpeed": 4000 , "pauseOnHover": false}'>
                            <div className="half-slider-item fl-wrap">
                                <div className="half-hero-wrap">
                                    <h1>Hey there !<br/>I'm  Martin Solonick<br/>Independent <span> Digital  Designer </span></h1>
                                    <h4>I create web and graphic design</h4>
                                    <div className="clearfix"></div>
                                    <a href="#sec2" className="custom-scroll-link btn float-btn flat-btn color-btn mar-top">Let's Start</a>
                                </div>
                            </div>
                            <div className="half-slider-item fl-wrap">
                                <div className="half-hero-wrap">
                                    <h1>Design<br/> classNamey and Stylish <br/>  <span>Brand Perception.</span></h1>
                                    <h4>I create web and graphic design</h4>
                                    <div className="clearfix"></div>
                                    <a href="portfolio.html" className="btn float-btn flat-btn color-btn mar-top">My Portfolio</a>
                                </div>
                            </div>
                            <div className="half-slider-item fl-wrap">
                                <div className="half-hero-wrap">
                                    <h1>Original Design <br/> Features <br/>With High  <span> Quality  Code.</span></h1>
                                    <h4>I create web and graphic design</h4>
                                    <div className="clearfix"></div>
                                    <a href="services.html" className="btn float-btn flat-btn color-btn mar-top">My services</a>
                                </div>
                            </div>
                        </div>
                        <div className="sp-cont sarr-contr sp-cont-prev"><i className="fal fa-arrow-left"></i></div>
                        <div className="sp-cont sarr-contr sp-cont-next"><i className="fal fa-arrow-right"></i></div>
                        <div className="slider-nav-counter"></div>
                    </div>
                <div className="half-bg-dec" data-ran="12"></div>
                <div className="hero-decor-numb"><span>40.7143528  </span><span>-74.0059731 </span> 
                    <a href="https://www.google.com/maps/" target="_blank" className="hero-decor-numb-tooltip" rel="noreferrer">Based In NewYork</a></div>
                <div className="pattern-bg"></div>
                <div className="hero-line-dec"></div>
            </div>
            </div>

        </>
    );
  }
}
export default Wrapper;