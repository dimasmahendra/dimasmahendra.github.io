import React, {Component} from "react";

class Welcome extends Component {
  render() {
    return (
        <section className="hero-wrap js-fullheight">
            <div className="overlay"></div>
            <div className="container">
                <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                    <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
                        <div className="text text-center">
                            <span className="subheading">Hey! I am</span>
                            <h1>Ronaldo Fredrickson</h1>
                            <h2>I'm a &nbsp;
                                <span className="txt-rotate" data-period="2000"
                                    data-rotate='[ "Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger" ]'></span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>            
            <div className="mouse">
                <a href="#" className="mouse-icon">
                    <div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
                </a>
            </div>
        </section>
    );
  }
}
export default Welcome;