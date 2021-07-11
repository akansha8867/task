import React, { Component } from 'react'
import './Home.css'
import homeimg from '../Images/homeimg.png'
import secondimage from '../Images/secondimage.png'
import copyright from '../Images/copyright.png'
import yoga from '../Images/yoga.png'
import play from '../Images/play.png'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            //* Main section of Home page *//
            <div className="homeMain">
                <div className="firstSection">
                    <div className="firstSectionImage">
                        <img src={homeimg} alt="load" />
                    </div>
                    <div className="textPortion">
                        <div className="text1">Get fitter and better </div>
                        <div className="text2">We offer you a perfectly designed yoga routine
                            for clearing out the unwanted body fat.
                        </div>
                    </div>
                </div>
                <div className="secondSection">
                    <div className="secondSectionLeft">
                        <img src={secondimage} alt="load" />
                    </div>
                    <div className="secondSectionRight">
                        {/* Form is made for Scheduling an appointment by the user*/}
                        <div className="ContactUsFormMain">
                            <form className="ContactUsForm">
                                <div className="ContactUsFormDiv">
                                    <div className="heading">
                                        Schedule an
                                        Appoinment
                                    </div>
                                    <div className="heading2">
                                        Here, let visitors know what will
                                        happen when they complete your form.
                                    </div>
                                    <div className="ContactUsInput">
                                        <div className="ContactUsInputField">
                                            <input type="text" placeholder=" First Name*" />
                                        </div>
                                    </div>
                                    <div className="ContactUsInput">
                                        <div className="ContactUsInputField">
                                            <input type="text" placeholder=" Last Name*" />
                                        </div>
                                    </div>
                                    <div className="ContactUsInput">
                                        <div className="ContactUsInputField">
                                            <input type="email" placeholder=" E-Mail*" />
                                        </div>
                                    </div>
                                    <div className="ContactUsInput">
                                        <div className="ContactUsInputField">
                                            <input type="number" placeholder=" Phone number*" />
                                        </div>
                                    </div>
                                    <div className="ContactUsInput">
                                        <div className="ContactUsInputField">
                                            <input type="text" placeholder=" Type of Appointment*" />
                                        </div>
                                    </div>
                                    <div className="ContactUsInputBtn">
                                        <div className="ContactUsInputBtnField">
                                            <button className="schedule">SCHEDULE NOW</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="thirdSection">
                    <div className="thirdSectionText">
                        <h1>Glimpse of our
                            Actual Sessions</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Vivamus aliquam ultricies tincidunt. Mauris ut elit sapien.
                            Vivamus nec erat porta, laoreet est id, faucibus lorem.
                            Vestibulum dignissim iaculis turpis ut molestie. Curabitur
                            vitae ipsum tortor. Vivamus tincidunt tellus sit amet velit
                        </p>
                    </div>
                    <div className="VideoBoxRight">
                        <img src={yoga} alt="load" />
                        <div className="playImage">
                            <img src={play} alt="load" />
                        </div>
                    </div>
                </div>
                <div className="fourthSection">
                    <div className="fourthLeft">
                        <h1>MOVE WITH PRIDE</h1>
                        <p>Join us in celebrating pride all month long with free live yoga classes for
                            everyone. Use code PRIDE</p>
                    </div>
                    <div className="fourthRight">
                        <button className="session">BOOK A SESSION</button>
                        <button className="know">KNOW MORE</button>
                    </div>
                </div>
                {/* Footer Section*/}
                <div className="footerSection">
                    <div className="footerLinks">
                        <ul className="footerLinks" type='none'>
                            <li><Link to="/AboutUs" className="link">FAQ</Link></li>
                            <li><Link to="/OurWork" className="link">REFER</Link></li>
                            <li><Link to="/Services" className="link">GIFT CARD</Link></li>
                            <li><Link to="/ContactUs" className="link">BLOG</Link></li>
                            <li><Link to="/" className="link">Home</Link></li>
                        </ul>
                    </div>
                    <div className="copyright">
                        <img src={copyright} alt="load" />
                        <p> 2021 Health Highway. All Rights Reserved.</p>
                    </div>
                    <div className="termsPrivacy">
                        <div className="TERMS">Terms</div>
                        <div className="PRIVACY">Privacy</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
