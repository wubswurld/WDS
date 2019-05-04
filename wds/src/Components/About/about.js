import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Particles from 'react-particles-js';
import color from '@material-ui/core/colors/deepOrange';

const About = () => {
    return (
    <Paper className="paperabout">
    <div>
        <h4 id="abouttitle">About Scalable Solutions</h4>
        <hr></hr>
        <h5>March 2019,<br />Scalable Solutions was created to give our customers<br />Specialized Development Opportunities at a competitive price.<br /> Our goal is to become your one and only stop for all cutting edge technological needs.<br />Our team is specialized in Software Development, Smart Contract Development and Social Media Marketing.<br /> At Scalable Solutions, We work with every client to figure out exactly what is neccessary to build their bussiness<br /> through Software Development and Social Media Marketing.<br /> You can count on us to bring you consistent results or a completed product that is certain to grow your bussiness!  
        </h5>
        <br />
       </div>
        <h2 className="pb-3 pt-2">Scalable Solutions Road Map</h2>
        <div class="page">
        <div class="page__demo">
            <div class="main-container page__container">
            <div class="timeline">
                <div class="timeline__group">
                <span class="timeline__year">Web Development</span>
                <div class="timeline__box">
                    <div class="timeline__date">
                    {/* <span class="timeline__day">Languages</span> */}
                    <span class="timeline__month">Languages</span>
                    </div>
                    <div class="timeline__post">
                    <div class="timeline__content">
                        <p id="p1">Our Development team builds complete Web Apps using languages such as React, css, and redux. For back-end projects we use Node.js, python and C</p>
                    </div>
                    </div>
                </div>
                <div class="timeline__box">
                    <div class="timeline__date">
                    {/* <span class="timeline__day">22</span> */}
                    <span class="timeline__month">More</span>
                    </div>
                    <div class="timeline__post">
                    <div class="timeline__content">
                        <p>Our projects use databases such as Firebase by google, Mongo Db, GraphSQl and MYSQL</p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="timeline__group">
                <span class="timeline__year">Smart Contract Development</span>
                <div class="timeline__box">
                    <div class="timeline__date">
                    {/* <span class="timeline__day">Info</span> */}
                    <span class="timeline__month">Info</span>
                    </div>
                    <div class="timeline__post">
                    <div class="timeline__content">
                        <p>Our lead Smart Contract engineer builds smart contracts on top of Ethereum's Solidity and HyperLedger</p>
                    </div>
                    </div>
                </div>
                <div class="timeline__box">
                    <div class="timeline__date">
                    {/* <span class="timeline__day">22</span> */}
                    <span class="timeline__month">More</span>
                    </div>
                    <div class="timeline__post">
                    <div class="timeline__content">
                        <p>We use test driven development which means we rigorously test our applications. Doing so gurantees we deliver a bullet proof product</p>
                    </div>
                    </div>
                </div>
                </div>
                <div class="timeline__group">
                <span class="timeline__year">Social Media Marketing</span>
                <div class="timeline__box">
                    <div class="timeline__date">
                    {/* <span class="timeline__day">28</span> */}
                    <span class="timeline__month">Info</span>
                    </div>
                    <div class="timeline__post">
                    <div class="timeline__content">
                        <p>Our Social Media Marketing team will build strategic ad campaigns and social media portfolios.<br />As well as, google search and keyword optimization<br />We will build ad campaigns and portfolios on all of the following Social Media Applications<br /></p>
                        <div>
                        <i className="fab fa-facebook-square fa-2x" id="fb"></i><i className="fab fa-linkedin fa-2x" id="link"></i><i className="fab fa-snapchat fa-2x" id="snap1"></i><i id="instag" className="fab fa-instagram fa-2x"></i><i id="goog" className="fab fa-google fa-2x"></i>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="timeline__box">
                    <div class="timeline__date">
                    {/* <span class="timeline__day">22</span> */}
                    <span class="timeline__month">More</span>
                    </div>
                    <div class="timeline__post">
                    <div class="timeline__content">
                        <p>Although Coding and Marketing are completely different we tackle both with the same mindset:<br />"Try it til it works!"</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
     </Paper>
    )
}
export default About;