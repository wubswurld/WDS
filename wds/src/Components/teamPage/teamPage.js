import React, { Component } from 'react';

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
                                    <img src="34463580.jpeg" alt="team member" className="img-responsive"></img>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Hello There!</h4>
                                        <p>I am Elliot Friedman, I have over two years of Smart Contract and DAPP experience!</p>
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
                                <span>Smart Contract Specialist</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="team-member">
                                <div className="team-img">
                                    <img src="IMG_0819_2_400x400.jpg" alt="team member" className="img-responsive"></img>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>Hi</h4>
                                        <p>I Founded Scalable Solutions to bring you high quality Internet needs at a fraction of the cost!</p>
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
                                    <img src="21209803.jpeg" alt="team member" className="img-responsive"></img>
                                </div>
                                <div className="team-hover">
                                    <div className="desk">
                                        <h4>I love to design</h4>
                                        <p>Any problem you give me, Ill Solve</p>
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