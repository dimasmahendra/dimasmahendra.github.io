import React, {Component} from "react";
import About from '../parts/About';
import Navbar from '../../component/Navbar';
import Footer from '../parts/Footer';

// Class Component Header
class Home extends Component {
  render() {
    return (
        <>
            <div id="wrapper">
                <Navbar />
                <div className="content">
                    <About />
                    <section className="dark-bg2 small-padding order-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-8">
                                    <h3>Ready To order Your Project ?</h3>
                                </div>
                                <div className="col-md-4"><a href="contacts.html" className="btn flat-btn color-btn">Get In Touch</a> </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </>
    );
  }
}
export default Home;