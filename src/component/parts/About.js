import React, {Component} from "react";

// Class Component Header
class About extends Component {
  render() {
    return (
            <section data-scrollax-parent="true" id="sec2">
                <div className="section-subtitle"  data-scrollax="properties: { translateY: '-250px' }" > <span>//</span>Words About  </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="collage-image fl-wrap">
                                <div className="collage-image-title" data-scrollax="properties: { translateY: '150px' }">Dimas Mahendra Kusuma</div>
                                <img src="/assets/images/all/1.jpg" className="respimg" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="main-about fl-wrap">
                                <h5>Curabitur convallis fringilla diam</h5>
                                <h2>Innovative solutions<br/>to boost <span> your creative </span>  projects</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat volutpat. Curabitur convallis fringilla diam sed aliquam. Sed tempor iaculis massa faucibus feugiat. In fermentum facilisis massa, a consequat purus viverra.</p>
                                <div className="features-box-container fl-wrap">
                                    <div className="row">
                                        <div className="features-box col-md-6">
                                            <div className="time-line-icon">
                                                <i className="fal fa-desktop"></i>
                                            </div>
                                            <h3>Web Design</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.   </p>
                                        </div>
                                        <div className="features-box col-md-6">
                                            <div className="time-line-icon">
                                                <i className="fal fa-mobile-android"></i>
                                            </div>
                                            <h3>Ui/Ux Design</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.  </p>
                                        </div>
                                        <div className="features-box col-md-6">
                                            <div className="time-line-icon">
                                                <i className="fab fa-pagelines"></i>
                                            </div>
                                            <h3>Branding</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.   </p>
                                        </div>
                                        <div className="features-box col-md-6">
                                            <div className="time-line-icon">
                                                <i className="fal fa-shopping-bag"></i>
                                            </div>
                                            <h3>Ecommerce</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque.  </p>
                                        </div>
                                    </div>
                                </div>
                                <a href="portfolio.html" className="btn float-btn flat-btn color-btn">My Portfolio</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-parallax-module" data-position-top="90"  data-position-left="25" data-scrollax="properties: { translateY: '-250px' }"></div>
                <div className="bg-parallax-module" data-position-top="70"  data-position-left="70" data-scrollax="properties: { translateY: '150px' }"></div>
                <div className="sec-lines"></div>
        </section>
    );
  }
}

export default About;