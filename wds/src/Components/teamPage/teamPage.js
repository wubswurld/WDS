import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class TeamPage extends Component {
    render() {
        return (
            <div className="container">
                <h6 id="teamhead">Our team</h6>
                <hr></hr>
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src="34463580.jpeg" alt="team member" className="img-responsive" id="eliot"></img>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <p>I have been deeply involved in blockchain and cryptocurrencies for over five years. My background is in Software Engineering and brings a depth of knowledge from deconstructing blockchain concepts down to the byte-level. In my spare time, I teach blockchain development and smart contract programming to corporate IT teams.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                        <a href="https://github.com/ElliotFriedman"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Elliot Friedman</h5>
                                <span>Smart Contract Specialist <br></br> Hired by IBM in 2019</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src="0.jpeg" alt="team member" className="img-responsive" id="wub"></img>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <p> I specialize in Front-end and Back-end Web app creation. With over two years of coding experience in languages such as C, Node.js React, Js and Jquery, I can complete any Website need you have while creating secure backend platforms. I manage the Social Media Marketing side of the bussiness where I study strategy and technique almost guranteed to bring conversion positive results</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="https://www.facebook.com/jackwatters123"><i className="fab fa-facebook"></i></a>
                                        <a href="https://linkedin.com/in/jackkobewatters"><i className="fab fa-linkedin"></i></a>
                                        <a href="https://github.com/wubswurld"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Jack Watters</h5>
                                <span>Founder | CEO</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src="21209803.jpeg" alt="team member" className="img-responsive" id="curt"></img>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <p>I am a talented and motivated software engineer residing in the Bay Area I have extensive knowledge in backend / frontend web development, as well as developing end to end systems. The languages I frequently use include C, Node.js, Python, html / css, and countless other api’s and frameworks I use on a daily basis.</p>
                                    </div>
                                    <div className="s-link">
                                        <a href="#"><i className="fab fa-facebook"></i></a>
                                        <a href="#"><i className="fab fa-linkedin"></i></a>
                                        <a href="https://github.com/cpk42"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="team-title">
                                <h5>Curtis Krommenhoek</h5>
                                <span>CO-Founder, Back-End Developer</span>
                            </div>
                        </div>

                    </div>
                </div>
        )
    }
}

export default TeamPage;