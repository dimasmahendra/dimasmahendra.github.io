import React, {Component} from "react";

// Class Component Header
class Footer extends Component {
  render() {
    return (
        <>
        <div className="height-emulator fl-wrap"></div>
        <footer className="main-footer fixed-footer">
            <div className="footer-inner fl-wrap">
                <div className="container">
                    <div className="partcile-dec" data-parcount="90"></div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="footer-title fl-wrap">
                                <span>Dimas Mahendra Kusuma</span>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="footer-header fl-wrap"><span>01.</span>Last Twitts</div>
                            <div className="footer-box fl-wrap">
                                <div className="twitter-swiper-container fl-wrap" id="twitts-container"></div>
                                <a href="{#}" className="btn float-btn trsp-btn">Follow</a>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="footer-header fl-wrap"><span>02.</span> Subscribe / Contacts</div>
                            <div className="footer-box fl-wrap">
                                <p>Want to be notified when we launch a new template or an udpate. Just sign up and we'll send you a notification by email.</p>
                                <div className="subcribe-form fl-wrap">
                                    <form id="subscribe" className="fl-wrap">
                                        <input className="enteremail" name="email" id="subscribe-email" placeholder="email" spellCheck="false" type="text" />
                                        <button type="submit" id="subscribe-button" className="subscribe-button"><i className="fal fa-paper-plane"></i> Send </button>
                                        <label htmlFor="subscribe-email" className="subscribe-message"></label>
                                    </form>
                                </div>
                                <div className="footer-contacts fl-wrap">
                                    <ul>
                                        <li><i className="fal fa-phone"></i><span>Phone :</span><a href="{#}">+489756412322</a></li>
                                        <li><i className="fal fa-envelope"></i><span>Email :</span><a href="{#}">yourmail@domain.com</a></li>
                                        <li><i className="fal fa-map-marker"></i><span>Address</span><a href="{#}">USA 27TH Brooklyn NY</a></li>
                                    </ul>
                                </div>
                                <div className="footer-socilal fl-wrap">
                                    <ul >
                                        <li><a href="{#}" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="{#}" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="{#}" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="{#}" target="_blank" rel="noreferrer"><i className="fab fa-vk"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter fl-wrap">
                <div className="container">
                    <div className="policy-box">
                        <span>&#169; Dimas Mahendra Kusuma {(new Date().getFullYear())}  /  All rights reserved. </span>
                    </div>
                    <a href="{#}" className="to-top color-bg"><i className="fal fa-angle-up"></i><span></span></a>
                </div>
            </div>
        </footer>
        </>
    );
  }
}

export default Footer;